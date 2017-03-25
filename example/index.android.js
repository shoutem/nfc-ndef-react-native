/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { getTagId, readTag, writeTag } from 'nfc-ndef-react-native'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  DeviceEventEmitter
} from 'react-native';

export default class NfcNdefSample extends Component {
  readTagId() {
    getTagId()
  }

  readTagData() {
	readTag(); // Read all records in the NDEF Message on the tag.
  }

  writeTagData() {
	writeTag(["foo", "bar"]); // Write these strings to individual NDEF records.
  }

  componentDidMount() {
    DeviceEventEmitter.addListener('onTagError', function (e) {
        console.log('error', e)
        Alert.alert(JSON.stringify(e))
    })

    DeviceEventEmitter.addListener('onTagDetected', function (e) {
        Alert.alert(JSON.stringify(e))
    })

    DeviceEventEmitter.addListener('onTagRead', (e) => {
        console.log('reading', e)
        Alert.alert(JSON.stringify(e))
    })

    DeviceEventEmitter.addListener('onTagWrite', (e) => {
        console.log('writing', e)
        Alert.alert(JSON.stringify(e))
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          nfc-ndef-react-native demo
        </Text>
        <Button
          onPress={this.readTagId}
          title="Get id of Tag"
        />
        <Button
          onPress={this.readTagData}
          title="Get sectors of a Tag"
        />
        <Button
          onPress={this.writeTagData}
          title="Write sectors of a Tag"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('NfcNdefSample', () => NfcNdefSample);
