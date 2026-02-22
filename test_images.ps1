$content = Get-Content src/data/services.js -Raw
$pattern = 'image:\s*[''"](https://skycoach.gg/storage/uploads/products/.*?)[''"]'
$matches = [regex]::Matches($content, $pattern)
$urls = $matches | ForEach-Object { $_.Groups[1].Value }

Write-Host "--- Testing First 20 ---"
$first20 = $urls | Select-Object -First 20
foreach ($url in $first20) {
    try {
        $resp = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 3 -ErrorAction Stop
        Write-Host "OK: $url"
    }
    catch {
        Write-Host "FAIL: $url"
    }
}

Write-Host "`n--- Testing Last 20 ---"
$last20 = $urls | Select-Object -Last 20
foreach ($url in $last20) {
    try {
        $resp = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 3 -ErrorAction Stop
        Write-Host "OK: $url"
    }
    catch {
        Write-Host "FAIL: $url"
    }
}
