import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'; 


const Contador = () => {
    const [contagem, setcontagem] = useState(0);
    const [outroContador, setoutroContador] = useState(0);


    function contar (){
        setcontagem (contagem + 1) 
        
    }
    function contaroutro (){
        setoutroContador (outroContador +1 ) 
        
    }



  return (
    <View>
      <Text style={styles.texo}>Contador: {contagem}</Text>
      <TouchableOpacity 
      onPress={()=>{contar()}}
      style={styles.botao}>
        <Text style={styles.textobotao}>Contar</Text>
      </TouchableOpacity>

      <Text style={styles.texo}>Outro Contador: {outroContador}</Text>
      <TouchableOpacity 
      onPress={()=>{contaroutro()}}
      style={styles.botao}>
        <Text style={styles.textobotao}>Contar outro</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Contador

const styles = StyleSheet.create({
    texo:{
        color:'black',
        fontSize:30
    },
    textobotao:{
        color:"white",
        textTransform:'uppercase',
        fontSize:20,
        textAlign:'center'
    },
    botao:{
        backgroundColor:'#6b7b80',
        padding:10,
        width:100,
        alignSelf:'center',
       
    }
})