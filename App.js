import { StatusBar } from 'expo-status-bar';
import {useNavigation} from '@react-navigation/core'
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home'
import Task from './screen/Task';
import AddTask from './screen/AddTask';
import SignIn from './screen/SignIn';
import Signup from './screen/SignUp';


const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUp'>

      <Stack.Screen name="SignIn" component={SignIn} 
  
      />
      <Stack.Screen name="SignUp" component={Signup} />

        <Stack.Screen
          name="Home"
          component={Home}
            
          />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="AddTask" component={AddTask} />        
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;