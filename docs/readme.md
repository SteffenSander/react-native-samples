# Installationsnotizen


1. React Native installieren
`npm install -g create-react-native-app`

2. Ein neues Projekt erstellen
`create-react-native-app StepCounter`
Die Auswahl `blank (TypeScript)` verwenden  
Den Projektnamen angeben.

3. Aktivieren
`cd StepCounter && npm start`

4. Der Standard-Browser öffnet sich
https://expo.io - products - to get the client (https://snack.expo.io: login: steffen.sander)  
 To run the app with live reloading, choose one of:  
  • Scan the QR code above with the Expo app (Android) or the Camera app (iOS).
  • Press a for Android emulator.
  • Press e to send a link to your phone with email.
  • Press s to sign in and enable more options.

5. App auf dem Handy starten
Vor dem Lesen des QR-Codes den Connection-Typ auf "Tunnel" ändern.  
Bei den Optionen LAN und Local traten Verbindungsfehler auf,  
auch wenn die angegebenen Ports freigegeben wurden.  
Troubleshooting:
    1. https://windowsreport.com/open-firewall-ports/ (19000-19002)  
    2. https://discuss.erpnext.com/t/virtualbox-wont-run-raw-mode-unavailable-courtesy-of-hyper-v/34541 (<-- Docker, Hyper-V u.a.) 

6. Device Emulator installieren (funktionierte nach Win 10 Update 19/3)
Google-Suche mit "genymotion free" -> /fun-zone/  
Ein Account ist anzulegen (steffen.sander verwendet)  
Download der Version mit VirtualBox durchgeführt.  
`cmd C:\SanderS\Tools\haxm-windows_v7_5_1` öffnen, um haxm_check.exe auszuführen  
    VT support -- yes  
    NX support -- yes  
GenyMotion settings -> ADB tab, choose **Use custom Android SDK Tools**

7. Install "react-native-elements"
npm WARN react-native-elements@1.1.0 requires a peer of react-native-vector-icons@>6.0.0 but none is installed. You must install peer dependencies yourself.  
npm WARN react-native-ratings@6.3.1 requires a peer of react@^16.0.0 but none is installed. You must install peer dependencies yourself.  

8. Installieren von React Native CLI und Abhängigkeiten
Quelle: [react native getting-started](https://facebook.github.io/react-native/docs/getting-started)
    1. [Chocolatey](https://facebook.github.io/react-native/docs/signed-apk-android) installieren
    2. choco install -y nodejs.install python2 jdk8 (python2 ausgelassen, weil python3 bereits vorhanden ist)
    3. `npm install -g react-native-cli`
    4. [Android Studio](https://developer.android.com/studio/index.html)  
        C:\Users\steff\AppData\Local\Android\android-sdk  
       [SDK-Manager ](https://developer.android.com/studio/intro/update#sdk-manager)  
       Setup ENV %ANDROID_HOME% und Path: platform-tools  
       siehe auch Visual Studio Emulator for Android  
       [several HAXM settings](https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows)  

9. Installieren von yarn
Ein Dependency Manager für Windows, siehe [yarnpkg.com](https://yarnpkg.com/en/docs/install#windows-stable)  

10. Neues Testprojekt erstellen (funktionierte nach Win 10 Update 19/3)
`react-native init AwesomeProject --version react-native@next`
`cd AwesomeProject && react-native run-android`

```json
  "privacy": "public",
  "platforms": [
    "ios",
    "android",
    "web"
  ],
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/icon.png",
  "splash": {
    "image": "./assets/ssvl_logo_2017.gif",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "updates": {
    "fallbackToCacheTimeout": 0
  },
  "assetBundlePatterns": [
    "**/*"
  ],
  "ios": {
    "supportsTablet": true
  }
```
