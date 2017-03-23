import React from 'react-native';

const NfcNdefReactNative = React.NativeModules.NfcNdefReactNative;

export const readTag = NfcReactNative.readTag;
export const writeTag = NfcReactNative.writeTag;
export const getTagId = NfcReactNative.getTagId;
