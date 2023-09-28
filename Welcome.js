import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, FlatListComponent, StyleSheet, Text, TextInput, View } from 'react-native';
import Fancybox from './Fancybox';
import { useState } from 'react';
import Readmore from './Readmore';

export default function Welcome() {

  const [addname, onAddname]= useState("namn");
  const [people,setPeople]= useState([{key: 'xerses', lastname:"exerson"},])
  const [showReadmore, setShowReadmore] = useState(true);
  function letsAddPerson () {if (addname!=""){const newlist= people.concat({key:addname, lastname: addname});
  setPeople(newlist);}
}
  return (
    <View style={styles.container}>

     <Readmore />

     <Text>Hej</Text>
     <TextInput onChangeText={onAddname} value ={addname}/>
     <Button title='lägg till'
       onPress={()=>{
        letsAddPerson();
        
        
       
       
       
     
       }}/>



     <FlatList
          data={people}
          renderItem={({item}) => <Fancybox name={item.lastname}/>}
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
