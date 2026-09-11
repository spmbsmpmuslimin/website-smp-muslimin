@echo off
title Deploy SMP Muslimin Cililin
color 0A

echo.
echo ========================================
echo        DEPLOY - SMP MUSLIMIN CILILIN
echo ========================================
echo.

cd "D:\Aplikasi Produksi\Web-smpmuslimin"

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

set /p commit_msg="  Enter commit message (default: update terbaru): "
if "%commit_msg%"=="" set commit_msg=update terbaru

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

echo [5/6] Committing: %commit_msg%
git commit -m "%commit_msg%"

if errorlevel 1 (
    echo.
    echo [WARNING] No changes to commit
    echo.
    set /p force_push="  Push anyway? (y/n): "
    if /i not "%force_push%"=="y" goto :end
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