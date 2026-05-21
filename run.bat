@echo off
echo ==============================================
echo   Starting XENO-SHIELD (Alien IDS)
echo ==============================================
echo.

echo [1/2] Starting Python Backend Server...
start "XENO-SHIELD Backend" cmd /k "cd backend && if exist venv\Scripts\activate (.\venv\Scripts\activate) else (echo VENV NOT FOUND!) && python main.py"

echo [2/2] Starting React Frontend Server...
start "XENO-SHIELD Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo Both servers are starting up in new windows!
echo Once the frontend window shows a "localhost" link, you can view the dashboard.
echo.
pause
