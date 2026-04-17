@echo off
echo Starting Hedaya Platform...
echo.

echo Starting Backend Server...
start cmd /k "cd backend && npm start"

timeout /t 3 /nobreak > nul

echo Starting Frontend Server...
cd frontend
start cmd /k "python -m http.server 3000"

echo.
echo Servers started!
echo - Backend: http://localhost:5000
echo - Frontend: http://localhost:3000
echo.
echo Press any key to stop servers...
pause > nul

echo Stopping servers...
taskkill /f /im node.exe > nul 2>&1
taskkill /f /im python.exe > nul 2>&1
echo Done.