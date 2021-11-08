
import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'






const AddTask = () => {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const navigation = useNavigation();


    async function saveData (name, desc)  {
       
        let value = {
            text:name,
            key:desc
        }
         await AsyncStorage.setItem('Data', JSON.stringify(value))
         let data =  await AsyncStorage.getItem('Data');
        console.log( data );
    }

    return (
        <View style={styles.main}>
            <Text style={styles.heading}> Enter Task Name </Text>
            <TextInput
                placeholder='Task Name'
                style={styles.input}
                onChangeText={(text) => setName(text)}
            />
            <Text style={styles.heading} > Enter Task Description </Text>
            <TextInput
                placeholder='Task Description'
                style={styles.inputDescription}
               
                onChangeText={(text) => setDescription(text)}
            />
            <Text style={styles.heading} > Select Task Start Date </Text>
            <View style={styles.inputWithBtn}>
                <TextInput
                    placeholder='Task StartDate'
                    style={styles.input}

                />
                <TouchableHighlight
                    style={styles.small}>
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
                />
                <TouchableHighlight
                    style={styles.small}>
                    <Button
                        title="o"
                        color='black'
                    />
                </TouchableHighlight>
            </View>

            <Button onPress = {() => saveData(name,description) } title = 'Save Task' />

        </View>
    )
}


const styles = StyleSheet.create({

    main: {
        alignItems: 'center',
        justifyContent: 'center'
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
        backgroundColor: 'black',
        color: 'white',
        width: 250,
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20

    },
    small: {

    }

})


export default AddTask;