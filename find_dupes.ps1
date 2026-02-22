$content = Get-Content src/data/services.js
$results = @()
$currentName = ""
foreach ($line in $content) {
    if ($line -match "name:\s*""(.*?)""") {
        $currentName = $matches[1]
    }
    if ($line -match "image:\s*['""](.*?)['""]") {
        $url = $matches[1]
        $results += [PSCustomObject]@{ Name = $currentName; URL = $url }
    }
}

$groups = $results | Group-Object URL | Where-Object { $_.Count -gt 1 } | Sort-Object Count -Descending
$outBuffer = @()
foreach ($g in $groups) {
    $outBuffer += "COUNT: $($g.Count) | URL: $($g.Name)"
    foreach ($item in $g.Group) {
        $outBuffer += "  - $($item.Name)"
    }
    $outBuffer += ""
}
$outBuffer | Out-File -FilePath "dupes_with_names.txt" -Encoding ascii
