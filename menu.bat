@echo off
echo ========================================
echo EliteGuardian React App - Quick Menu
echo ========================================
echo.
echo Location: D:\repo\EliteGuardian\repo
echo.
echo Choose an option:
echo.
echo 1. First-time setup (install + build + deploy)
echo 2. Development mode (hot reload)
echo 3. Build for production
echo 4. Deploy to Blazor
echo 5. Build + Deploy (quick workflow)
echo 6. Open documentation
echo 7. Exit
echo.
choice /c 1234567 /n /m "Enter your choice (1-7): "

if errorlevel 7 goto end
if errorlevel 6 goto docs
if errorlevel 5 goto quickdeploy
if errorlevel 4 goto deploy
if errorlevel 3 goto build
if errorlevel 2 goto dev
if errorlevel 1 goto setup

:setup
echo.
echo Running first-time setup...
cd /d "D:\repo\EliteGuardian\repo"
powershell -ExecutionPolicy Bypass -File ".\setup.ps1"
goto end

:dev
echo.
echo Starting development server...
echo Access at: http://localhost:3000
echo Press Ctrl+C to stop
cd /d "D:\repo\EliteGuardian\repo"
npm run dev
goto end

:build
echo.
echo Building for production...
cd /d "D:\repo\EliteGuardian\repo"
npm run build
echo.
echo Build complete! Files in: dist\
goto menu

:deploy
echo.
echo Deploying to Blazor...
cd /d "D:\repo\EliteGuardian\repo"
powershell -ExecutionPolicy Bypass -File ".\deploy-to-blazor.ps1"
goto menu

:quickdeploy
echo.
echo Building and deploying...
cd /d "D:\repo\EliteGuardian\repo"
npm run build
if errorlevel 1 (
    echo Build failed!
    goto menu
)
powershell -ExecutionPolicy Bypass -File ".\deploy-to-blazor.ps1"
goto menu

:docs
echo.
echo Opening documentation...
start "" "D:\repo\EliteGuardian\repo\README.md"
start "" "D:\repo\EliteGuardian\repo\QUICK_START.md"
goto menu

:menu
echo.
echo ========================================
echo.
choice /c YN /m "Return to menu? (Y/N)"
if errorlevel 2 goto end
if errorlevel 1 cls & goto start

:start
cls
goto :eof

:end
echo.
pause
