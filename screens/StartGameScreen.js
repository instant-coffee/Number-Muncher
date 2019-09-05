import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import Card from '../components/Card'

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The game screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={ () => {} }/>
          <Button title="Confirm" onPress={ () => {} }/>
        </View>
      </Card>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16, 
  },
})

export default StartGameScreen
