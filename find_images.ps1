$urls = @(
    'https://skycoach.gg/destiny-boost',
    'https://skycoach.gg/destiny-boost/raids',
    'https://skycoach.gg/destiny-boost/dungeons',
    'https://skycoach.gg/destiny-boost/exotics',
    'https://skycoach.gg/destiny-boost/pvp',
    'https://skycoach.gg/destiny-boost/character-leveling'
)

$allLinks = @()

foreach ($u in $urls) {
    Write-Host "Scanning $u..."
    try {
        $resp = Invoke-WebRequest -Uri $u -TimeoutSec 15 -ErrorAction Stop
        $content = $resp.Content
        $regex = [regex]'https://skycoach\.gg/storage/uploads/products/[\w\d\-_]+\.png'
        $matches = $regex.Matches($content)
        foreach ($m in $matches) {
            $allLinks += $m.Value
        }
    }
    catch {
        Write-Host "FAILED: $u"
    }
}

$uniqueLinks = $allLinks | Select-Object -Unique
$uniqueLinks | Out-File -FilePath "working_links.txt" -Encoding ascii
Write-Host "Found $($uniqueLinks.Count) unique links."
