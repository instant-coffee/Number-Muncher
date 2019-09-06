import React, {useState} from 'react'
import { View,
  Text, 
  StyleSheet, 
  Button, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import Colours from '../constants/colours'

const StartGameScreen = props => {

  const [enteredValue, setEnteredValue] = useState('')
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.screen}>
        <Text style={styles.title}>The game screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input 
            style={styles.input} 
            keyboardType="number-pad" 
            blurOnSubmit 
            autoCapitalize='none' 
            maxLength={2} 
            onChangeText={numberInputHandler}
            value={enteredValue}
            />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button style={styles.button} title="Reset" onPress={ () => {} } color={Colours.primary}/>
            </View>
            <View style={styles.button}>
              <Button style={styles.button} title="Confirm" onPress={ () => {} } color={Colours.secondary}/>
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 60,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16, 
  },
  button: {
    width: 100,
  }
})

export default StartGameScreen
