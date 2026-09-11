@echo off
setlocal enabledelayedexpansion
title Deploy Aplikasi Website SMP Muslimin Cililin
color 0A

echo.
echo =======================================================
echo        DEPLOY - Aplikasi Website SMP MUSLIMIN CILILIN
echo =======================================================
echo.

cd /d "D:\Aplikasi Produksi\Aplikasi-web-smpmuslimin"

echo [INFO] Current directory: %CD%
echo.

git status --short > nul 2>&1
if errorlevel 1 (
    echo [ERROR] Not a git repository!
    goto :error
)

for /f "delims=" %%b in ('git branch --show-current') do set current_branch=%%b
echo [INFO] Current branch: %current_branch%
echo.

echo [INFO] Checking for uncommitted local changes before pull...
for /f "delims=" %%s in ('git status --short') do set has_local_changes=1
if defined has_local_changes (
    echo.
    echo [WARNING] Ada perubahan lokal yang belum di-commit:
    git status --short
    echo.
    set /p pull_confirm="  Tetap pull sekarang? Bisa memicu merge/konflik (y/n): "
    if /i not "!pull_confirm!"=="y" (
        echo.
        echo Dibatalkan. Commit atau stash perubahan dulu sebelum deploy.
        goto :end
    )
)
echo.

echo [1/6] Pulling latest changes from remote...
git pull origin %current_branch%
if errorlevel 1 (
    echo.
    echo [ERROR] Pull failed! Selesaikan konflik dulu sebelum lanjut.
    echo.
    goto :error
)
echo.

echo [2/6] Checking for local changes...
echo.
git status --short
echo.

set commit_msg=
set /p commit_msg="  Enter commit message (default: update terbaru): "
if "!commit_msg!"=="" set commit_msg=update terbaru
REM Escape tanda kutip ganda di commit message biar gak bikin command error
set commit_msg=!commit_msg:"=""!

echo.
echo [3/6] Running build check (npm run build)...
echo.
call npm run build
if errorlevel 1 (
    echo.
    echo ==========================================
    echo   BUILD FAILED! Deploy dibatalkan.
    echo   Perbaiki error di atas dulu sebelum push.
    echo ==========================================
    echo.
    goto :error
)
echo.
echo [INFO] Build sukses.
echo.

echo [4/6] Staging changes...
git add .

echo [5/6] Committing: !commit_msg!
git commit -m "!commit_msg!"

if errorlevel 1 (
    echo.
    echo [WARNING] No changes to commit
    echo.
    set /p force_push="  Push anyway? (y/n): "
    if /i not "!force_push!"=="y" goto :end
) else (
    echo.
    echo [INFO] Files changed in this commit:
    git show --stat --oneline HEAD
)

echo.
echo [6/6] Pushing to GitHub...
git push origin %current_branch%

if errorlevel 1 (
    echo.
    echo ==========================================
    echo         PUSH FAILED!
    echo ==========================================
    echo.
    goto :error
)

echo.
echo ==========================================
echo   PUSHED! Vercel will auto-deploy...
echo ==========================================
echo.
goto :end

:error
echo.
echo [ERROR] Deployment failed!
echo.

:end
pause