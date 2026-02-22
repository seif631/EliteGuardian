$ProgressPreference = 'SilentlyContinue'
$ids = @(717, 310, 5854, 1551, 2134, 1492, 449, 438, 5098, 4380, 4985, 3261, 1326, 494, 300)
$results = @()

foreach ($id in $ids) {
    $url = "https://skycoach.gg/destiny-boost/products/some-name-$id"
    try {
        $r = Invoke-WebRequest -Uri $url -TimeoutSec 10 -ErrorAction Ignore
        if ($r.Content -match 'property="og:image"\s+content="([^"]+)"') {
            Write-Host "$id : $($matches[1])"
            $results += "$id : $($matches[1])"
        }
    }
    catch {
        # ignore
    }
}
$results | Out-File -FilePath "scanned_images.txt" -Encoding ascii
