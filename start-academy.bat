@echo off
chcp 65001 >nul
title JavaEng 600+ Academy - Local & Wi-Fi Server (Port 8966)
echo =====================================================================
echo   JAVAENG 600+ ACADEMY - DANG KHOI DONG SERVER TAI CONG 8966...
echo   Giu cua so nay mo khi hoc (Co the thu nho xuong thanh Taskbar).
echo =====================================================================
start "" "http://127.0.0.1:8966"
node "%~dp0server.js"
pause
