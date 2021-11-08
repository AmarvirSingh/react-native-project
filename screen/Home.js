import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, FlatList, RefreshControl, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home({navigation}){


  const [isfetching, setisfetching] = useState(false)
  const [ Task, setTask]  = useState([
  
  ])

  const [Refreshing, setRefreshing] = useState(false)

  async function getData(){
    const value =  await AsyncStorage.getItem('Data');

   
  //  setTask([...Task, {text:value.text, key:value.key}]);
   return(JSON.parse(value))
   
    // Task = [...Task, JSON.parse(value) ]
  }

  const onRefresh = () =>{
    const value = getData();
    setRefreshing(true)
    if(value!=null){
    setTask([{'text':value.text, 'key': value.key}]);
    console.log(Task)
    } 
   
    setRefreshing(false)
  }

  


  return (


    <View style={styles.container}>
      <TouchableOpacity 
      onPress= {() => navigation.navigate('AddTask')}>
        <Text style={styles.addBtn}> Add Task </Text>
      </TouchableOpacity>



      <FlatList style={styles.list}
        data={Task}
        refreshControl = {
          <RefreshControl 
            refreshing = {Refreshing}
            onRefresh = {onRefresh}
          />
        }
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between',
            borderColor: 'black', borderBottomWidth: 1,
            marginVertical:10
          }}>
            <Text
              style={{
                paddingHorizontal: 10,
                marginVertical: 10,
                fontSize: 20,
                backgroundColor: '#fefefe'
              }}>
              {item.text}
            </Text>
            <TouchableOpacity onPress={getData}>
              <Text style = {styles.normalbtn}> change </Text>
            </TouchableOpacity>
          </View>
        )
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn: {
    backgroundColor:'black',
    color:'white',
    width: 250,
    padding:10,
    fontSize:20,
    textAlign:'center',
    marginVertical:20
    
  },
  list:{
    width:'100%',
    paddingHorizontal:20,
  },
  normalbtn:{
    backgroundColor:'black',
    color:'white',
    width: 100,
    padding:10,
    fontSize:20,
    textAlign:'center',
    marginVertical:20
    
  }
});


