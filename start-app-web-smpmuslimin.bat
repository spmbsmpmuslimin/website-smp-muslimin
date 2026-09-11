@echo off
title Aplikasi Website SMP Muslimin Cililin
color 1F

echo ================================================
echo   APLIKASI WEBSITE SMP MUSLIMIN CILILIN
echo ================================================
echo.
echo [*] Memulai aplikasi...
echo.

cd /d "D:\Aplikasi Produksi\Aplikasi-web-smpmuslimin"

if not exist "package.json" (
    echo [ERROR] File package.json tidak ditemukan!
    echo Pastikan folder aplikasi sudah benar.
    echo.
    pause
    exit
)

echo [*] Menjalankan npm run dev...
echo.
echo ================================================
echo.

REM Script "dev" di package.json project ini sudah otomatis
REM membuka browser sendiri, jadi tidak perlu helper Chrome manual di sini.
npm run dev

echo.
echo ================================================
echo [*] Aplikasi telah ditutup
echo ================================================
echo.
