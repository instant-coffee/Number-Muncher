import React from 'react'
import { TextInput, StyleSheet } from 'react-native';

import Colours from '../constants/colours'

const Input = props => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}}/>
  )
}

const styles = StyleSheet.create({
  inputContainer: {},
  input: {
    height: 32,
    borderBottomColor: Colours.primary,
    borderBottomWidth: 1,
    marginVertical: 16,
  }
})


export default Input
