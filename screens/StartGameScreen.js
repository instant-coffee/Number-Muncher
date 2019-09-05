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
    padding: 24,
    maxWidth: '85%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.3,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16, 
  },
})

export default StartGameScreen
