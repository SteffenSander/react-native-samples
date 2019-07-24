#1 Installationshinweise


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
    2. https://discuss.erpnext.com/t/virtualbox-wont-run-raw-mode-unavailable-courtesy-of-hyper-v/34541 


6. Device Emulator installieren
Google-Suche mit "genymotion free" -> /fun-zone/  
Ein Account ist anzulegen (steffen.sander verwendet)  
Download der Version mit VirtualBox durchgeführt.  

7. Install 'react-native-elements"
npm WARN react-native-elements@1.1.0 requires a peer of react-native-vector-icons@>6.0.0 but none is installed. You must install peer dependencies yourself.  
npm WARN react-native-ratings@6.3.1 requires a peer of react@^16.0.0 but none is installed. You must install peer dependencies yourself.  

