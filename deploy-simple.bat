@echo off
echo ========================================
echo Deploy React to Blazor (Simple)
echo ========================================
echo.

cd /d "D:\repo\EliteGuardian\repo"

REM Check if dist folder exists
if not exist "dist" (
    echo ERROR: dist folder not found!
    echo Please run: npm run build first
    pause
    exit /b 1
)

echo Removing old deployment...
if exist "..\wwwroot\react-app" (
    rmdir /s /q "..\wwwroot\react-app"
)

echo Creating directory...
mkdir "..\wwwroot\react-app"

echo Copying files...
xcopy /E /I /Y "dist\*" "..\wwwroot\react-app\"

if errorlevel 1 (
    echo ERROR: Failed to copy files!
    pause
    exit /b 1
)

echo.
echo ========================================
echo DEPLOYMENT SUCCESSFUL!
echo ========================================
echo.
echo Files deployed to: ..\wwwroot\react-app\
echo.
echo Next steps:
echo 1. cd D:\repo\EliteGuardian
echo 2. dotnet run
echo 3. Navigate to https://localhost:5001/catalog
echo.
pause
