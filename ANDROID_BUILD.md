# Android build

This project wraps the existing Arabic study planner in Capacitor. The app UI,
styles, JavaScript, and built-in synthesized alarm tones are bundled locally;
the app does not need a network connection to run. Study data uses the Android
WebView's persistent `localStorage` and IndexedDB storage.
The native manifest does not request internet access. Existing data in a
regular browser remains untouched and can be moved into the app through its
backup import feature.

## Requirements

- Node.js 22 or newer
- Java 21
- Android Studio with Android SDK Platform 36 and the Build-Tools required by the generated project
- Android SDK command-line tools and a configured `ANDROID_HOME`/`ANDROID_SDK_ROOT`

## Prepare or refresh the Android project

```powershell
npm install
npm run build:web
npm run android:sync
```

The generated native project already lives in `android/`; `www/` is rebuilt
from `index.html`, `styles.css`, and `app.js`. If you intentionally create a
new project without the checked-in `android/` folder, add it with
`npm run android:add` once.

The launcher, adaptive foreground, and Android splash images use the artwork
in `assets/app-icon/rafiq-study-original.png`. Regenerate density resources
from Windows PowerShell with:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\generate-icons.ps1
```

## Build a debug APK

```powershell
npm run android:debug
```

The debug APK is created at
`android/app/build/outputs/apk/debug/app-debug.apk`. For a signed release APK,
open the project in Android Studio and use **Build > Generate Signed Bundle /
APK** with your own signing key.

## Offline and alarm behavior

All app assets are local, and no server or third-party service is used at
runtime. Alarm preferences and uploaded audio are saved locally. Alarms can
play while the app page is active; a static Capacitor WebView does not schedule
native alarms or guarantee audio after the app is backgrounded or closed.
