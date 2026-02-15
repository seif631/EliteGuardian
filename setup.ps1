# Quick Setup Script for React App in D:\repo\EliteGuardian\repo\

Write-Host "?? EliteGuardian React App - Quick Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$repoDir = "D:\repo\EliteGuardian\repo"

# Check if we're in the right directory
$currentDir = Get-Location
if ($currentDir.Path -ne $repoDir) {
    Write-Host "?? Navigating to repo directory..." -ForegroundColor Yellow
    Set-Location $repoDir
}

# Check Node.js
Write-Host "? Checking Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "  Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "  ? Node.js not found!" -ForegroundColor Red
    Write-Host "  Please install from https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Check npm
try {
    $npmVersion = npm --version
    Write-Host "  npm: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "  ? npm not found!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install dependencies
Write-Host "? Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ? Installation failed!" -ForegroundColor Red
    exit 1
}
Write-Host "  ? Dependencies installed" -ForegroundColor Green

Write-Host ""

# Build the app
Write-Host "? Building React app..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ? Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "  ? Build successful" -ForegroundColor Green

Write-Host ""

# Deploy to Blazor
Write-Host "? Deploying to Blazor..." -ForegroundColor Yellow
.\deploy-to-blazor.ps1

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "? Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "?? Next Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "To run in development mode:" -ForegroundColor White
Write-Host "  cd D:\repo\EliteGuardian\repo" -ForegroundColor Cyan
Write-Host "  npm run dev" -ForegroundColor Cyan
Write-Host "  (Access at http://localhost:3000)" -ForegroundColor Gray
Write-Host ""
Write-Host "To run in Blazor:" -ForegroundColor White
Write-Host "  cd D:\repo\EliteGuardian" -ForegroundColor Cyan
Write-Host "  dotnet run" -ForegroundColor Cyan
Write-Host "  (Access at https://localhost:5001/catalog)" -ForegroundColor Gray
Write-Host ""
