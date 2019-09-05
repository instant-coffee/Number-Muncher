import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The game screen</Text>
      <View style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={ () => {} }/>
          <Button title="Confirm" onPress={ () => {} }/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginVertical: 12,
  },
  inputContainer: {
    width: 300,
    maxWidth: '85%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16, 
  },
})

export default StartGameScreen
