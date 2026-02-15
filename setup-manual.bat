@echo off
echo ========================================
echo EliteGuardian - Manual Setup (No PowerShell)
echo ========================================
echo.

cd /d "D:\repo\EliteGuardian\repo"

echo Step 1: Checking Node.js...
node --version
if errorlevel 1 (
    echo ERROR: Node.js not found!
    echo Please install from https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js found!
echo.

echo Step 2: Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)
echo Dependencies installed!
echo.

echo Step 3: Building React app...
echo (This may take 10-30 seconds)
call npm run build
if errorlevel 1 (
    echo.
    echo ERROR: Build failed!
    echo Check the error messages above for details.
    echo.
    echo Common fixes:
    echo - Delete node_modules and run: npm install
    echo - Check that all files exist in src/
    echo.
    pause
    exit /b 1
)
echo Build complete!
echo.

echo Step 4: Deploying to Blazor...
if exist "..\wwwroot\react-app" (
    echo Removing old deployment...
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
echo SUCCESS! Setup complete!
echo ========================================
echo.
echo Next steps:
echo 1. cd D:\repo\EliteGuardian
echo 2. dotnet run
echo 3. Navigate to https://localhost:5001/catalog
echo.
pause
