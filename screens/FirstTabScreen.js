/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Menu from '../src/pages/Menu';
import Signup from '../src/pages/Signup';


type Props = {};
export default App = (props) => (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#185935"
        barStyle="light-content"/>
        <Menu/>
        <TouchableOpacity style={styles.button}
        onPress={()=>props.navigator.switchToTab({
        tabIndex: 1
      })}
        >
              <Text style={styles.buttonText}>Login</Text>
             </TouchableOpacity>
             <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <Text style={styles.signupButton}> Signup</Text>
      </View>
)     

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a7a4e',
  },
  button: {
    width: 300,
    backgroundColor: '#185935',
    borderRadius: 25,
    marginVertical: 40,
    paddingVertical: 13
  },
  buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 30,
    flexDirection: 'row'
  },
signupText:{
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    marginVertical: 2
},
signupButton:{
    color:'#ffffff',
    fontSize: 16,
    fontWeight:'500',
    marginVertical: 8
}
});
