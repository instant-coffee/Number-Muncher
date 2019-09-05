import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return(
    <View style={ {...styles.card, ...props.style} }>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.3,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 16,
  }
})

export default Card