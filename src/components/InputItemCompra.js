import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@rneui/themed'

const InputItemCompra = ({submit}) => {
  const [texto , setTexto]=useState('');
  
  function submeterInput(){
    submit(texto)
    setTexto('')
  }
  
  return (
   
    <View>
      <Input 
      style={styles.input}
      placeholder='digite o item'
      leftIcon={{type:'material', name:'add',iconStyle: styles.icon}}
      value={texto}
      onChangeText={setTexto}
      onSubmitEditing={submeterInput}
     
      />
      
    </View>
  )
}

export default InputItemCompra

const styles = StyleSheet.create({
  input:{
    color:'#F9fafb'
  },
  icon:{
    color:'#F9fafb'
  },
})

