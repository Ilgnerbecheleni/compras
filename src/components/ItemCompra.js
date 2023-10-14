import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CheckBox } from '@rneui/base'
import {AntDesign} from '@expo/vector-icons'
const ItemCompra = ({itemCompra,remove}) => {
const [checked, setchecked] = useState(false);

function removeItem(){
remove(itemCompra)
}

  return (
    <View  style={styles.container}>
        <CheckBox checked={checked}
         containerStyle={styles.checkboxContainer}
         checkedColor='#9ca3af'
         uncheckedColor='#f9fafb'
         onPress={()=>{setchecked(!checked)}}
         title={itemCompra.nome}
         textStyle={[styles.nomeitem,checked && styles.itemMarcado]}
         />
      {/* <Text style={}>{itemCompra.nome}</Text> */}
<TouchableOpacity style={styles.remove}  onPress={removeItem}>
    <AntDesign name='minuscircle' size={20} color={'#F9FAFB'}/>
</TouchableOpacity>
    </View>
  )
}

export default ItemCompra

const styles = StyleSheet.create({
    nomeitem:{
        color:'white',
        fontSize:20,
        padding:10
    },
    container:{
margin:5,
backgroundColor:'#374150',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
paddingRight:15

    },
    checkboxContainer:{
        backgroundColor:'transparent'
    },
    itemMarcado:{
        textDecorationLine:'line-through',
        color:'#9ca3af'
    },
   
})