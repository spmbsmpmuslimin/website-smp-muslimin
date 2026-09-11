@echo off
title Deploy SMP Muslimin Cililin
color 0A

echo.
echo ========================================
echo        DEPLOY - SMP MUSLIMIN CILILIN
echo ========================================
echo.

cd "D:\Aplikasi Produksi\Aplikasi-web-smpmuslimin"

echo [INFO] Current directory: %CD%
echo.

git status --short > nul 2>&1
if errorlevel 1 (
    echo [ERROR] Not a git repository!
    goto :error
)

echo [1/4] Checking for changes...
echo.
git status --short
echo.

set /p commit_msg="  Enter commit message (default: update terbaru): "
if "%commit_msg%"=="" set commit_msg=update terbaru

echo.
echo [2/4] Staging changes...
git add .

echo [3/4] Committing: %commit_msg%
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
echo [4/4] Pushing to GitHub...
git push origin main

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
