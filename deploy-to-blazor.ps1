# Build and Deploy React App to Blazor wwwroot
# Run this from D:\repo\EliteGuardian\repo\

Write-Host "?? Building React App for Blazor Integration..." -ForegroundColor Cyan
Write-Host ""

$currentDir = Get-Location
$repoDir = "D:\repo\EliteGuardian\repo"
$wwwrootDir = "D:\repo\EliteGuardian\wwwroot\react-app"

# Navigate to repo directory
Set-Location $repoDir

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "?? Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "? npm install failed!" -ForegroundColor Red
        Set-Location $currentDir
        exit 1
    }
}

# Build the React app
Write-Host "?? Building React app..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "? Build failed!" -ForegroundColor Red
    Set-Location $currentDir
    exit 1
}

# Remove old deployment
if (Test-Path $wwwrootDir) {
    Write-Host "???  Removing old deployment..." -ForegroundColor Yellow
    Remove-Item -Path $wwwrootDir -Recurse -Force
}

# Create wwwroot/react-app directory
New-Item -ItemType Directory -Path $wwwrootDir -Force | Out-Null

# Copy dist files to wwwroot
Write-Host "?? Deploying to Blazor wwwroot..." -ForegroundColor Yellow
Copy-Item -Path "$repoDir\dist\*" -Destination $wwwrootDir -Recurse -Force

Write-Host ""
Write-Host "? Build and deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "?? Deployed to: $wwwrootDir" -ForegroundColor Cyan
Write-Host "?? React app will be available at: https://localhost:5001/catalog" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. cd D:\repo\EliteGuardian" -ForegroundColor White
Write-Host "  2. dotnet run" -ForegroundColor White
Write-Host "  3. Navigate to https://localhost:5001/catalog" -ForegroundColor White

Set-Location $currentDir
