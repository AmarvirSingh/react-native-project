import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = () => {
  const navigation = useNavigation();
  return (
      <View style={styles.main}>
      <Text style={styles.heading}> Enter Task Name </Text>
      <TextInput
          placeholder='Task Name'
          style={styles.input} />
      <Text style={styles.heading} > Enter Task Description </Text>
      <TextInput
          placeholder='Task Description'
          style={styles.inputDescription}
           />
      <Text style={styles.heading} > Select Task Start Date </Text>
      <View style={styles.inputWithBtn}>
          <TextInput
              placeholder='Task StartDate'
              style={styles.input}
              editable='false'
          />
          <TouchableHighlight
              style={styles.btn}>
              <Button
                  title="o"
                  color='black'
              />
          </TouchableHighlight>
      </View>
      <Text style={styles.heading} > select End Date </Text>
      <View style={styles.inputWithBtn}>
          <TextInput
              placeholder='Task EndDate'
              style={styles.input}
              editable='false' />
          <TouchableHighlight
              style={styles.btn}>
              <Button
                  title="o"
                  color='black'
              />
          </TouchableHighlight>
      </View>

   

  </View>
  )
}


const styles = StyleSheet.create({

  main:{
      alignItems:'center',
      justifyContent:'center'
  },
  heading: {
      fontSize: 20,
      padding: 10,
      textTransform: 'capitalize',
      fontWeight: 'bold',
      marginLeft: 10
  },
  input: {
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      padding: 10,
      width: 250,
      marginLeft: 20
  },
  inputDescription: {
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      padding: 10,
      width: 250,
      marginLeft: 20,
      height: 100
  },
  inputWithBtn: {
      flexDirection: 'row'
  },
  btn: {
      padding: 10,
  },

})

export default Task;