# NfcReactNative

nfc-ndef-react-native is a react-native module for android to write/read tags that support the NDEF format (tested on Mifare Classic). This is a fork of Lube's nfc-react-native.

## Quick and Easy Demo

`$ git clone https://github.com/observ3r/nfc-ndef-react-native`
`$ cd nfc-ndef-react-native/example`
`$ npm install`
`$ react-native run-android`

## Getting started

`$ npm install nfc-ndef-react-native --save`

### Mostly automatic installation

`$ react-native link nfc-ndef-react-native`

If it doesn't work for any reason, follow the manual installation AND the configuration section.

### Manual installation

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import es.tiarg.nfcndefreactnative.NfcNdefReactNativePackage;` to the imports at the top of the file
  - Add `new NfcNdefReactNativePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
    ```
    include ':nfc-ndef-react-native'
    project(':nfc-ndef-react-native').projectDir = new File(rootProject.projectDir,  '../node_modules/nfc-ndef-react-native/android')
    ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
    ```
      compile project(':nfc-ndef-react-native')
    ```

## Usage

Take a look at the example.

## Configuration

In your manifest add:
```xml
<uses-permission android:name="android.permission.NFC" />
....
```
Your main activity should look something like this:
```xml
...
<activity
  android:name=".MainActivity"
  android:launchMode="singleTask"
  android:label="@string/app_name"
  android:configChanges="keyboard|keyboardHidden|orientation|screenSize">

  <intent-filter>
			<action android:name="android.nfc.action.NDEF_DISCOVERED"/>
			<category android:name="android.intent.category.DEFAULT"/>	
			<data android:mimeType="text/plain" />
            <action android:name="android.nfc.action.TECH_DISCOVERED"/>
  </intent-filter>

  <meta-data android:name="android.nfc.action.TECH_DISCOVERED"
             android:resource="@xml/nfc_tech_filter" />
</activity>
```

Add android/app/src/main/res/xml/nfc_tech_filter.xml (create directories that don't exist) with the following:
```xml
<resources xmlns:xliff="urn:oasis:names:tc:xliff:document:1.2">
  <tech-list>
    <tech>android.nfc.tech.Ndef</tech>
    <tech>android.nfc.tech.NdefFormatable</tech>
  </tech-list>
</resources>
```

## Contribution
Please feel free to contribute in anyway!

## License
This repository is distributed under [MIT license](https://github.com/Lube/nfc-react-native/blob/master/LICENSE) 
