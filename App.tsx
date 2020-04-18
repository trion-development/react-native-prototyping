import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import PushNotification from 'react-native-push-notification';

interface AppState {
  locationText: string
  editedLocationText?: string
}

export default class App extends React.Component<any, AppState> {

  constructor(args: any) {
    super(args);
    this.state = { locationText: "Hallo Welt!" };
  }

  private saveLocation() {
    console.log(`Aktualisiere Ort: ${this.state.editedLocationText}`);
    Geolocation.getCurrentPosition(pos => {
      let editedLocText = this.state.editedLocationText ? this.state.editedLocationText : ""
      let loc = `${editedLocText}: ${pos.coords.latitude}/${pos.coords.longitude}`
      this.setState({ locationText: loc, editedLocationText: "" });
      PushNotification.localNotification({ message: loc });
    },
      error => console.log(error),
      { enableHighAccuracy: false, timeout: 50000 });
  }

  private onLocationTextChange(text: string) {
    this.setState({ editedLocationText: text });
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.locationText}</Text>
        <TextInput placeholder="Ort eingeben" onChangeText={(text) => this.onLocationTextChange(text)} />
        <Button title="Übernehmen" onPress={() => this.saveLocation()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3fccf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
