# <div align="center">
  <a href="https://github.com/Mithronn/expo-ir/">
    <img
      src="assets/logo.png"
      alt="expo-ir"
      height="64" 
      width="64" />
  </a>
  
  Infrared Sensors
</p>

Provides access to device's infrared sensor. 

## Installation in managed Expo projects

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects.

## Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npx expo install expo-ir
```

### Configure for Android

Add `android.permission.TRANSMIT_IR` permission to your manifest (`android/app/src/main/AndroidManifest.xml`):

```xml
<uses-permission android:name="android.permission.TRANSMIT_IR" />
```