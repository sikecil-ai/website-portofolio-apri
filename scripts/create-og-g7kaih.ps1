Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# 1. Background Gradient (Dark Blue/Slate to Black)
$bgRect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$cTop = [System.Drawing.Color]::FromArgb(255, 11, 23, 44)
$cBottom = [System.Drawing.Color]::FromArgb(255, 3, 7, 18)
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($bgRect, $cTop, $cBottom, [System.Drawing.Drawing2D.LinearGradientMode]::ForwardDiagonal)
$g.FillRectangle($bgBrush, $bgRect)

# 2. Draw Subtle Grid Accent Lines
$penGrid = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(20, 255, 255, 255), 1)
for ($x = 0; $x -lt $width; $x += 40) {
    $g.DrawLine($penGrid, $x, 0, $x, $height)
}
for ($y = 0; $y -lt $height; $y += 40) {
    $g.DrawLine($penGrid, 0, $y, $width, $y)
}

# 3. Top Badges
$brushCyan = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 56, 189, 248))
$brushGreen = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 52, 211, 153))
$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 248, 250, 252))
$brushSlate = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 148, 163, 184))
$brushGold = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 251, 191, 36))

# Font Definitions
$fontBadge = New-Object System.Drawing.Font("Arial", 11, [System.Drawing.FontStyle]::Bold)
$fontTitle = New-Object System.Drawing.Font("Arial", 28, [System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font("Arial", 14, [System.Drawing.FontStyle]::Regular)
$fontAuthor = New-Object System.Drawing.Font("Arial", 12, [System.Drawing.FontStyle]::Bold)
$fontCardTitle = New-Object System.Drawing.Font("Arial", 16, [System.Drawing.FontStyle]::Bold)
$fontStatVal = New-Object System.Drawing.Font("Arial", 20, [System.Drawing.FontStyle]::Bold)
$fontStatLbl = New-Object System.Drawing.Font("Arial", 9, [System.Drawing.FontStyle]::Bold)

# Draw Badges
$badgeBgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(50, 6, 182, 212))
$badgePen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 6, 182, 212), 1.5)
$g.FillRectangle($badgeBgBrush, 60, 60, 210, 36)
$g.DrawRectangle($badgePen, 60, 60, 210, 36)
$g.DrawString("MAN KOTA CIMAHI", $fontBadge, $brushCyan, 72, 70)

$badgeGreenBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(50, 16, 185, 129))
$badgeGreenPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(120, 16, 185, 129), 1.5)
$g.FillRectangle($badgeGreenBg, 285, 60, 190, 36)
$g.DrawRectangle($badgeGreenPen, 285, 60, 190, 36)
$g.DrawString("ZERO SERVER COST", $fontBadge, $brushGreen, 297, 70)

# 4. Main Headline
$g.DrawString("Kisah G7KAIH Mankoci:", $fontTitle, $brushWhite, 60, 125)
$brushHeadlineGlow = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 56, 189, 248))
$g.DrawString("Dari Kertas ke 871 Siswa", $fontTitle, $brushHeadlineGlow, 60, 175)

# Subtitle
$descText = "Memotong penderitaan ratusan kertas fotokopi jadi sistem`notomasi tap-tap 1 menit & dashboard monitoring karakter.`nStudi kasus implementasi nyata di MAN Kota Cimahi."
$g.DrawString($descText, $fontSub, $brushSlate, 60, 245)

# Author Bar
$avatarBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 2, 132, 199))
$g.FillEllipse($avatarBrush, 60, 360, 50, 50)
$avatarPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 56, 189, 248), 2)
$g.DrawEllipse($avatarPen, 60, 360, 50, 50)
$avatarFont = New-Object System.Drawing.Font("Arial", 18, [System.Drawing.FontStyle]::Bold)
$g.DrawString("A", $avatarFont, $brushWhite, 73, 370)

$g.DrawString("Muhammad Apriyanto Wijaya (@madebyaapri)", $fontAuthor, $brushWhite, 125, 366)
$brushAuthorSub = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 100, 116, 139))
$g.DrawString("Lead Automation Architect • Alumni MAN Kota Cimahi", $fontSub, $brushAuthorSub, 125, 388)

# 5. Right Column Card: Mockup Preview
$cardRect = New-Object System.Drawing.Rectangle(720, 70, 420, 480)
$cardBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(240, 15, 23, 42))
$cardPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 51, 65, 85), 2)
$g.FillRectangle($cardBrush, $cardRect)
$g.DrawRectangle($cardPen, $cardRect)

# Card Header
$iconBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 6, 182, 212))
$g.FillRectangle($iconBg, 745, 95, 46, 46)
$iconFont = New-Object System.Drawing.Font("Arial", 14, [System.Drawing.FontStyle]::Bold)
$g.DrawString("G7", $iconFont, $brushWhite, 755, 107)

$g.DrawString("G7KAIH Mankoci", $fontCardTitle, $brushWhite, 805, 95)
$brushTagline = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 148, 163, 184))
$fontSmall = New-Object System.Drawing.Font("Arial", 10, [System.Drawing.FontStyle]::Regular)
$g.DrawString("Google Apps Script Web App", $fontSmall, $brushTagline, 805, 122)

$g.DrawString("5.0 ★", $fontAuthor, $brushGold, 1070, 105)

# Card Divider
$penDiv = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 30, 41, 59), 1)
$g.DrawLine($penDiv, 745, 160, 1115, 160)

# Card Stat Grid 2x2
$pillBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 30, 41, 59))
$pillPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 51, 65, 85), 1)

# Stat 1: Siswa Terkelola
$g.FillRectangle($pillBg, 745, 180, 175, 75)
$g.DrawRectangle($pillPen, 745, 180, 175, 75)
$g.DrawString("TOTAL SISWA", $fontStatLbl, $brushSlate, 760, 192)
$g.DrawString("871+", $fontStatVal, $brushCyan, 760, 212)

# Stat 2: Biaya Server
$g.FillRectangle($pillBg, 940, 180, 175, 75)
$g.DrawRectangle($pillPen, 940, 180, 175, 75)
$g.DrawString("BIAYA SERVER", $fontStatLbl, $brushSlate, 955, 192)
$g.DrawString("Rp 0", $fontStatVal, $brushGreen, 955, 212)

# Stat 3: Kecepatan Input
$g.FillRectangle($pillBg, 745, 270, 175, 75)
$g.DrawRectangle($pillPen, 745, 270, 175, 75)
$g.DrawString("INPUT TAP-TAP", $fontStatLbl, $brushSlate, 760, 282)
$g.DrawString("1 Menit", $fontStatVal, $brushGold, 760, 302)

# Stat 4: Pilar Kebiasaan
$g.FillRectangle($pillBg, 940, 270, 175, 75)
$g.DrawRectangle($pillPen, 940, 270, 175, 75)
$g.DrawString("KONSISTENSI", $fontStatLbl, $brushSlate, 955, 282)
$g.DrawString("7 Habit", $fontStatVal, $brushWhite, 955, 302)

# Card Bottom Modules
$modBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 19, 30, 54))
$g.FillRectangle($modBg, 745, 365, 370, 50)
$g.DrawRectangle($pillPen, 745, 365, 370, 50)
$g.DrawString("Dashboard BK Desktop & Cetak Rapor", $fontBadge, $brushWhite, 760, 380)

# Card CTA Action
$ctaBg = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 2, 132, 199))
$g.FillRectangle($ctaBg, 745, 435, 370, 50)
$fontCta = New-Object System.Drawing.Font("Arial", 12, [System.Drawing.FontStyle]::Bold)
$g.DrawString("Buka Studi Kasus & Etalase Sistem", $fontCta, $brushWhite, 790, 450)

# Save Image
$outPath = "public\images\og-g7kaih.png"
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
Write-Output "SUCCESS: Created $outPath"
