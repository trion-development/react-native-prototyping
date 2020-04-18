import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
    this.setState({ locationText: this.state.editedLocationText ? this.state.editedLocationText : "", editedLocationText: "" });
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
