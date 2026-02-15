@echo off
echo ========================================
echo Quick Rebuild and Deploy
echo ========================================
echo.

cd /d "D:\repo\EliteGuardian\repo"

echo Building React app...
call npm run build
if errorlevel 1 (
    echo Build failed!
    pause
    exit /b 1
)

echo Deploying to Blazor...
call deploy-simple.bat

echo.
echo ========================================
echo SUCCESS!
echo ========================================
echo.
echo Now run: cd .. then dotnet run
echo Or just: cd D:\repo\EliteGuardian; dotnet run
echo.
pause
