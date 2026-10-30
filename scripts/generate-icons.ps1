param(
  [string]$ProjectRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
)

$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$sourcePath = Join-Path $ProjectRoot "assets\app-icon\rafiq-study-original.png"
$resourceRoot = Join-Path $ProjectRoot "android\app\src\main\res"
$source = [System.Drawing.Bitmap]::new($sourcePath)

function New-Canvas([int]$Width, [int]$Height, [System.Drawing.Color]$Background) {
  $image = [System.Drawing.Bitmap]::new(
    $Width,
    $Height,
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  )
  $graphics = [System.Drawing.Graphics]::FromImage($image)
  $graphics.Clear($Background)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  return @($image, $graphics)
}

function Save-ScaledImage(
  [System.Drawing.Bitmap]$Image,
  [System.Drawing.Graphics]$Graphics,
  [int]$Width,
  [int]$Height,
  [double]$Scale
) {
  $side = [int][Math]::Round([Math]::Min($Width, $Height) * $Scale)
  $left = [int][Math]::Floor(($Width - $side) / 2)
  $top = [int][Math]::Floor(($Height - $side) / 2)
  $Graphics.DrawImage($source, $left, $top, $side, $side)
}

try {
  $iconSizes = @{
    "mipmap-mdpi" = 48
    "mipmap-hdpi" = 72
    "mipmap-xhdpi" = 96
    "mipmap-xxhdpi" = 144
    "mipmap-xxxhdpi" = 192
  }
  foreach ($density in $iconSizes.Keys) {
    $folder = Join-Path $resourceRoot $density
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
    $side = $iconSizes[$density]
    foreach ($name in @("ic_launcher.png", "ic_launcher_round.png")) {
      $pair = New-Canvas $side $side ([System.Drawing.Color]::Transparent)
      try {
        Save-ScaledImage $pair[0] $pair[1] $side $side 1.0
        $pair[0].Save((Join-Path $folder $name), [System.Drawing.Imaging.ImageFormat]::Png)
      } finally {
        $pair[1].Dispose()
        $pair[0].Dispose()
      }
    }

    $foregroundSide = [int][Math]::Round($side * 2.25)
    $pair = New-Canvas $foregroundSide $foregroundSide ([System.Drawing.Color]::Transparent)
    try {
      Save-ScaledImage $pair[0] $pair[1] $foregroundSide $foregroundSide 0.66
      $pair[0].Save(
        (Join-Path $folder "ic_launcher_foreground.png"),
        [System.Drawing.Imaging.ImageFormat]::Png
      )
    } finally {
      $pair[1].Dispose()
      $pair[0].Dispose()
    }
  }

  $splashSizes = @{
    "drawable" = @(480, 320)
    "drawable-land-hdpi" = @(800, 480)
    "drawable-land-mdpi" = @(480, 320)
    "drawable-land-xhdpi" = @(1280, 720)
    "drawable-land-xxhdpi" = @(1600, 960)
    "drawable-land-xxxhdpi" = @(1920, 1280)
    "drawable-port-hdpi" = @(480, 800)
    "drawable-port-mdpi" = @(320, 480)
    "drawable-port-xhdpi" = @(720, 1280)
    "drawable-port-xxhdpi" = @(960, 1600)
    "drawable-port-xxxhdpi" = @(1280, 1920)
  }
  foreach ($entry in $splashSizes.GetEnumerator()) {
    $folder = Join-Path $resourceRoot $entry.Key
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
    $width, $height = $entry.Value
    $pair = New-Canvas $width $height ([System.Drawing.Color]::FromArgb(244, 246, 241))
    try {
      Save-ScaledImage $pair[0] $pair[1] $width $height 0.55
      $pair[0].Save(
        (Join-Path $folder "splash.png"),
        [System.Drawing.Imaging.ImageFormat]::Png
      )
    } finally {
      $pair[1].Dispose()
      $pair[0].Dispose()
    }
  }
} finally {
  $source.Dispose()
}

Write-Output "Generated launcher, adaptive foreground, and splash assets from $sourcePath."
