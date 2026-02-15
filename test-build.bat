@echo off
echo ========================================
echo Testing React Build (Fixed)
echo ========================================
echo.

cd /d "D:\repo\EliteGuardian\repo"

echo Checking Node.js...
node --version
if errorlevel 1 (
    echo ERROR: Node.js not found!
    echo Please install from https://nodejs.org/
    pause
    exit /b 1
)
echo.

echo Checking npm...
npm --version
if errorlevel 1 (
    echo ERROR: npm not found!
    pause
    exit /b 1
)
echo.

echo Running build...
call npm run build
if errorlevel 1 (
    echo.
    echo ========================================
    echo BUILD FAILED!
    echo ========================================
    echo.
    echo Check the error messages above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo BUILD SUCCESSFUL!
echo ========================================
echo.
echo Output location: dist\
echo.

dir dist /b

echo.
echo Next step: Deploy to Blazor
echo Run: .\deploy-to-blazor.ps1
echo Or:  deploy-manual.bat
echo.
pause
