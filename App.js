import React, { Component } from 'react';
import { Alert, StyleSheet, Button, TextInput, Text, View } from 'react-native';

export default class CustomIntroApp extends Component {
  state = {
    phrase: '',
    name: '',
  }
  updatePhrase = (text) => {
    this.setState({ phrase: text })
  }
  updateName = (text) => {
    this.setState({ name: text })
  }
  intro = (phrase, name) => {
    Alert.alert("Your Custom Introduction:", phrase + " " + name)
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>
          Custom Introduction
        </Text>

        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Introduction Phrase"
          placeholderTextColor = "#1B76BE"
          autoCapitalize = "sentences"
          onChangeText = {this.updatePhrase}
        />
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Your Name"
          placeholderTextColor = "#1B76BE"
          autoCapitalize = "sentences"
          onChangeText = {this.updateName}
        />

        <Button
          onPress = {
            () => this.intro(this.state.phrase, this.state.name)
          }
          title = "Display Introduction"
          color = "#1B76BE" 
        />
     </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
  },
  input: {
    margin: 15,
    height: 50,
    padding: 5,
    borderColor: '#1B76BE',
    borderWidth: 2
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B76BE',
    textAlign: 'center',
  },
});
