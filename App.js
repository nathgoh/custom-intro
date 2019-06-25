import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class CustomIntroApp extends Component {

  buttonPressed() {
    alert("Hello")
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text>Custom Introductions</Text>
        <Button
          onPress = {this.buttonPressed}
          title = "Click Me"
          color = "#1B76BE" 
        />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
