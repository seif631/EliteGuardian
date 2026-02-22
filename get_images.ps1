$ProgressPreference = 'SilentlyContinue'
$urls = @{
    "kings_fall" = "https://skycoach.gg/destiny-boost/products/kings-fall-raid-311"
    "trials"     = "https://skycoach.gg/destiny-boost/products/flawless-trials-of-osiris-449"
    "vanguard"   = "https://skycoach.gg/destiny-boost/products/vanguard-ops-boost-4613"
    "gambit"     = "https://skycoach.gg/destiny-boost/products/gambit-weekly-challenges-4614"
    "power"      = "https://skycoach.gg/destiny-boost/products/light-level-boost-438"
    "onslaught"  = "https://skycoach.gg/destiny-boost/products/onslaught-4380"
}

foreach ($id in $urls.Keys) {
    try {
        $html = (Invoke-WebRequest -Uri $urls[$id] -TimeoutSec 10 -ErrorAction Ignore).Content
        if ($html -match 'property="og:image"\s+content="([^"]+)"') {
            Write-Host "$id : $($matches[1])"
        }
        else {
            Write-Host "$id : NO_IMAGE"
        }
    }
    catch {
        Write-Host "$id : FAIL"
    }
    Start-Sleep -Seconds 1
}
