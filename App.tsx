import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text>Hallo Welt Test 123</Text>
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
