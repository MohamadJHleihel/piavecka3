import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, FlatListComponent, StyleSheet, Text, TextInput, View } from 'react-native';
import Fancybox from './Fancybox';
import { useState } from 'react';

export default function App() {

  const [addname, onAddname]= useState("namn");
  const [people,setPeople]= useState([{key: 'xerses', lastname:"exerson"},])
  
  return (
    <View style={styles.container}>
     <Text>Hej</Text>
     <TextInput onChange={onAddname} value ={addname}/>
     <Button title='lägg till'
       onPress={()=>{
        var oldPeople = people;
        oldPeople.push({key: addname, lastname:addname});
        setPeople(oldPeople);
       
       }}/>



     <FlatList
          data={people}
          renderItem={({item}) => <Fancybox/>}
          />









      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100,
  },
});
