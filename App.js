import React, { Component } from 'react';
import { StyleSheet, Button, TouchableHighlight, TouchableOpacity, Text, View } from 'react-native';

export default class CustomIntroApp extends Component {
  buttonPressed() {
    alert("Hello User!")
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text>Custom Introductions</Text>
        <Button
          onPress = {this.buttonPressed}
          title = "Initiate Introduction"
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
