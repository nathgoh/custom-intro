import React, { Component } from 'react';
import { Alert, StyleSheet, Button, TextInput, Text, View } from 'react-native';

export default class CustomIntroApp extends Component {
  //States
  state = {
    phrase: '',
    name: '',
  }

  //Update the state of the text input for phrase 
  updatePhrase = (text) => {
    this.setState({ phrase: text })
  }

  //Update the state of the text input for name
  updateName = (text) => {
    this.setState({ name: text })
  }

  //Concatenate the phrase and name together
  intro = (phrase, name) => {
    Alert.alert("Your Custom Introduction:", phrase + " " + name + ".")
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>
          Custom Introduction
        </Text>

        {/*Text input box for the phrase*/}
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Introduction Phrase"
          placeholderTextColor = "#1B76BE"
          autoCapitalize = "sentences"
          onChangeText = {this.updatePhrase}
        />

        {/*Text input box for your name*/}
        <TextInput style = {styles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Your Name"
          placeholderTextColor = "#1B76BE"
          autoCapitalize = "sentences"
          onChangeText = {this.updateName}
        />

        {/*Button that will display the combined phrase and name when pressed*/}
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

//Stylesheet for the UI
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
