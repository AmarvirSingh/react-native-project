import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Platform, StatusBar, SafeAreaView } from 'react-native'
import {auth } from '../storage/fire'
import {signInWithEmailAndPassword} from 'firebase/auth'


export default function SignIn({navigation}) {


    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const onPressSignIn = async (userEmail, userPassword) =>{
        await signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then(userCredential =>{
            const user = userCredential.user.email;
            if (user != null) {
                navigation.push('Home', {
                    'user' : user
                })
            }
        })
        .catch(err => alert(err.message))
    }



    return (
        <SafeAreaView style={styles.container}> 
        <View >

            <Text style ={styles.heading}> Sign In Form </Text>
            <TextInput 
            style={styles.field} 
            placeholder= 'Enter Email'
            onChangeText = {text => setEmail(text)}
            />
            <TextInput 
            style={styles.field} 
            placeholder= 'Enter Password'
                onChangeText = {text => setPassword(text)}
            />
            <Button 
            onPress = {() => {onPressSignIn(Email, Password)}}
            style={styles.btn}
            color ='red'
            title= 'Sign In'/>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
       paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight : 10,
        alignItems:'center',
        justifyContent:'center',
        
    },
    heading:{
        alignSelf:'center',
        marginTop:30,
        fontSize:30,
        color:'red',
        fontWeight:'bold',
        fontStyle:'italic'
    },
    field:{
        width:250,
        padding:10,
        borderColor:'red',
        borderWidth:2,
       borderRadius:50,
        marginVertical:15
    },
    btn:{
        marginVertical:25
        
    }
})
