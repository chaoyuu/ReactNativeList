import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,FlatList} from 'react-native';

categories = [
  {label: 'Food', value: 'food'},
  {label: 'Coffee', value: 'coffee'},
  {label: 'Transport', value: 'transport'},
  {label: 'Entertainment', value: 'entertainment'},
  {label: 'Rent', value: 'rent'},
  {label: 'Groceies', value: 'groceies'}

]

export default function App() {
  return (
   <View style={styles.container}>
     <Text> chaoyu</Text>
     <View>
       <TextInput/>
     </View>
  
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingTop: 40,
  },
});
