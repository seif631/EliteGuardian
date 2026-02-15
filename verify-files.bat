@echo off
echo ========================================
echo Verifying React App Files
echo ========================================
echo.

cd /d "D:\repo\EliteGuardian\repo"

set MISSING=0

echo Checking essential files...
echo.

REM Check source files
if not exist "src\App.jsx" (
    echo [X] src\App.jsx - MISSING
    set MISSING=1
) else (
    echo [OK] src\App.jsx
)

if not exist "src\App.css" (
    echo [X] src\App.css - MISSING
    set MISSING=1
) else (
    echo [OK] src\App.css
)

if not exist "src\main.jsx" (
    echo [X] src\main.jsx - MISSING
    set MISSING=1
) else (
    echo [OK] src\main.jsx
)

if not exist "src\index.css" (
    echo [X] src\index.css - MISSING
    set MISSING=1
) else (
    echo [OK] src\index.css
)

echo.
echo Checking component files...
echo.

if not exist "src\Components\Header.jsx" (
    echo [X] src\Components\Header.jsx - MISSING
    set MISSING=1
) else (
    echo [OK] src\Components\Header.jsx
)

if not exist "src\Components\Hero.jsx" (
    echo [X] src\Components\Hero.jsx - MISSING
    set MISSING=1
) else (
    echo [OK] src\Components\Hero.jsx
)

if not exist "src\Components\CategoryFilter.jsx" (
    echo [X] src\Components\CategoryFilter.jsx - MISSING
    set MISSING=1
) else (
    echo [OK] src\Components\CategoryFilter.jsx
)

if not exist "src\Components\ServiceCard.jsx" (
    echo [X] src\Components\ServiceCard.jsx - MISSING
    set MISSING=1
) else (
    echo [OK] src\Components\ServiceCard.jsx
)

if not exist "src\Components\Footer.jsx" (
    echo [X] src\Components\Footer.jsx - MISSING
    set MISSING=1
) else (
    echo [OK] src\Components\Footer.jsx
)

echo.
echo Checking data files...
echo.

if not exist "src\data\services.js" (
    echo [X] src\data\services.js - MISSING
    set MISSING=1
) else (
    echo [OK] src\data\services.js
)

if not exist "src\lib\utils.js" (
    echo [X] src\lib\utils.js - MISSING
    set MISSING=1
) else (
    echo [OK] src\lib\utils.js
)

echo.
echo Checking UI components...
echo.

if not exist "src\components\ui\button.jsx" (
    echo [X] src\components\ui\button.jsx - MISSING
    set MISSING=1
) else (
    echo [OK] src\components\ui\button.jsx
)

if not exist "src\components\ui\use-toast.jsx" (
    echo [X] src\components\ui\use-toast.jsx - MISSING
    set MISSING=1
) else (
    echo [OK] src\components\ui\use-toast.jsx
)

echo.
echo Checking config files...
echo.

if not exist "package.json" (
    echo [X] package.json - MISSING
    set MISSING=1
) else (
    echo [OK] package.json
)

if not exist "vite.config.js" (
    echo [X] vite.config.js - MISSING
    set MISSING=1
) else (
    echo [OK] vite.config.js
)

if not exist "index.html" (
    echo [X] index.html - MISSING
    set MISSING=1
) else (
    echo [OK] index.html
)

echo.
echo ========================================

if %MISSING%==1 (
    echo.
    echo [!] Some files are missing!
    echo     Check the list above.
    echo.
    pause
    exit /b 1
) else (
    echo.
    echo [OK] All essential files are present!
    echo     You can run: npm run build
    echo.
    pause
    exit /b 0
)
