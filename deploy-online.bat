@echo off
chcp 65001 >nul
echo =========================================================
echo   JavaEng 600+ Academy - Cong cu Day Web Online Mien Phi
echo =========================================================
echo.
echo Chon nen tang ban muon xuat ban:
echo   [1] Surge.sh (Nhanh nhat, mien phi)
echo   [2] Vercel
echo   [3] Cloudflare Pages
echo.
set /p choice="Nhap lua chon (1/2/3): "
if "%choice%"=="1" npx surge .
if "%choice%"=="2" npx vercel --prod
if "%choice%"=="3" npx wrangler pages deploy . --project-name=javaeng-600-academy
pause
