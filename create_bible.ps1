# Script pour créer les trois versions de la Bible avec tous les livres

$bibleBooks = @(
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
    "Joshua", "Judges", "Ruth", "1_Samuel", "2_Samuel",
    "1_Kings", "2_Kings", "1_Chronicles", "2_Chronicles", "Ezra",
    "Nehemiah", "Esther", "Job", "Psalms", "Proverbs",
    "Ecclesiastes", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel",
    "Daniel", "Hosea", "Joel", "Amos", "Obadiah",
    "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah",
    "Haggai", "Zechariah", "Malachi", "Matthew", "Mark",
    "Luke", "John", "Acts", "Romans", "1_Corinthians",
    "2_Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians",
    "1_Thessalonians", "2_Thessalonians", "1_Timothy", "2_Timothy", "Titus",
    "Philemon", "Hebrews", "James", "1_Peter", "2_Peter",
    "1_John", "2_John", "3_John", "Jude", "Revelation"
)

# Fonction pour créer les fichiers de la Bible
function Create-BibleFiles {
    param(
        [string]$versionName,
        [string]$versionPath,
        [hashtable]$bibleText
    )
    
    for ($i = 0; $i -lt $bibleBooks.Count; $i++) {
        $bookNum = ($i + 1).ToString("00")
        $bookName = $bibleBooks[$i]
        $fileName = "${bookNum}_${bookName}.txt"
        $filePath = Join-Path $versionPath $fileName
        
        if ($bibleText.ContainsKey($bookName)) {
            $content = $bibleText[$bookName]
            Set-Content -Path $filePath -Value $content -Encoding UTF8
            Write-Host "✓ Créé: $fileName ($versionName)"
        }
    }
}

# Les trois versions seront créées avec le texte respectif
Write-Host "Script de création de Bible prêt"
