$ProgressPreference = 'SilentlyContinue'
$urls = @(
    "https://skycoach.gg/destiny-boost/products/sacred-barque-7407",
    "https://skycoach.gg/destiny-boost/products/flawless-trials-of-osiris-449",
    "https://skycoach.gg/destiny-boost/products/trials-of-osiris-loot-shower-bundle-3261",
    "https://skycoach.gg/destiny-boost/products/the-summoner-adept-1250",
    "https://skycoach.gg/destiny-boost/products/keen-thistle-7303"
)

foreach ($u in $urls) {
    try {
        $html = (Invoke-WebRequest -Uri $u -TimeoutSec 10 -ErrorAction Ignore).Content
        if ($html -match 'property="og:image"\s+content="([^"]+)"') {
            Write-Host "$u : $($matches[1])"
        }
    }
    catch { }
}
