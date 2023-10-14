import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import ItemCompra from './ItemCompra';
import InputItemCompra from './InputItemCompra';
import uuid from 'react-uuid';
const Listacompras = () => {
    const [lista, setLista] = useState([]);
function adicionaLista(nomeitem){
   
   
    setLista([...lista , {id:uuid() , nome: nomeitem}])
}

function removerLista(item){

   const listaTemp = lista.filter(elemento=> elemento.id!=item.id);

   setLista(listaTemp);
    
}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de compras <AntDesign name='shoppingcart' size={30}/></Text>
    <InputItemCompra submit={adicionaLista}/>
    <FlatList
    data={lista}
    renderItem={({item})=>{
        return(<ItemCompra  itemCompra={item} remove={removerLista}  />)
    }}
    
    />
   
    </View>
  )
}

export default Listacompras

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    titulo:{
        fontSize:30,
        color:'#f9fafb',
        textTransform:'uppercase',
        marginBottom:20,textAlign:'center'
    }
})