import { StatusBar } from 'expo-status-bar';
import { FlatList, FlatListComponent, StyleSheet, Text, View } from 'react-native';

export default function Fancybox() {


  
  return (
    <View style={fancystyles.redbox} >
        <Text>Fin Box</Text>









    </View>
  );
}

const fancystyles = StyleSheet.create({
    redbox: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:100,
      width:100,
      height:100,
      marginTop:5,
    },
  });
  

