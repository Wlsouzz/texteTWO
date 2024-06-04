import React from 'react';
import { Text, StyleSheet, View, Image,FlatList} from 'react-native';


export default function Home() {
  return (
    <View style={estilo.container}>

  <Text>ESSA É A TELA DE DETALHES</Text>    
      
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#FF69B4",
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }
});