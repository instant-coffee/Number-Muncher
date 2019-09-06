import React from 'react'
import {View, Text, StyleSheet } from 'react-native'

import Colours from '../constants/colours'

const Header = props => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 50,
    backgroundColor: Colours.primary,
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  headerTitle: {
    color: Colours.secondary,
    fontSize: 24,
  }

})

export default Header;