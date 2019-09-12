import React, {useState} from 'react'
import { View,
  Text, 
  StyleSheet, 
  Button, 
  TouchableWithoutFeedback, 
  Keyboard,
  Alert, 
} from 'react-native'

import Card from '../components/Card'
import Input from '../components/Input'
import Colours from '../constants/colours'

const StartGameScreen = props => {

  const [enteredValue, setEnteredValue] = useState('')
  const [userConfirmed, setUserConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState()

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setUserConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Number is not valid!', 
        'Number has to be a number between 1 - 99', 
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
      return
    }
    // This is batched to the next render cycle so order is not important
    setUserConfirmed(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue('')
  }

  let confimedOutput

  if (userConfirmed) {
    confimedOutput = <Text>Chosen Number: { selectedNumber }</Text>
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
              <Button style={styles.button} title="Reset" onPress={ resetInputHandler } color={Colours.primary}/>
            </View>
            <View style={styles.button}>
              <Button style={styles.button} title="Confirm" onPress={ confirmInputHandler } color={Colours.secondary}/>
            </View>
          </View>
        </Card>
        {confimedOutput}
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
