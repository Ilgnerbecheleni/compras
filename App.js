import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';

import Listacompras from './src/components/Listacompras';
export default function App() {
  return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

     <Listacompras/>
    </SafeAreaView>
  </SafeAreaProvider>
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
   
  },
});
