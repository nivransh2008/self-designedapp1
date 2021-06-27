import React from "react";
import { ImageBackground, StyleSheet, Text, View,TextInput, TouchableOpacity, } from "react-native";
import firebase from 'firebase'
import db from '../config'
import ReviewScreen from "./ReviewScreen";

const image = { uri: "https://fordsproduce.com/wp-content/uploads/2018/06/fpc_web_bg.jpg" };

export default class VegetableScreen extends React.Component{
  constructor(){
    super()
    this.state={
      emailId:'', 
      password:'', 
      isModalVisible:false
    }
  }
  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      this.props.navigation.navigate("ReviewScreen")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    })
  }

  userSignUp = (emailId, password) =>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      return alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    });
  }
  render(){
return(
  
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>The vegetable maintainer</Text>
      <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType="email-address"
            onChangeText={text => {
              this.setState({
                emailId: text
              });
            }}
          />
          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="enter Password"
            onChangeText={text => {
              this.setState({
                password: text
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {this.userSignUp(this.state.emailId, this.state.password)}}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
    </ImageBackground>
  </View>
)
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:-100, 
    fontFamily: 'Comic Sans MS'
  },
  box:{
    width:200,
    heigth:50,
    borderWidth:2,
    borderColor:'white',
    alignSelf:'center'
  }, 
  formTextInput: {
    width: "35%",
    height: 35,
    alignSelf: "center",
    borderColor: "#f51414",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10, 
    color:'#000000'
  },
  loginBox: {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor: "#0c8516",
    fontSize: 20,
    margin: 10,
    paddingLeft: 10, 
    alignSelf:'center', 
    color:'#000000'
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#0c8516",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    alignSelf:'center',
  },
  buttonText: {
    color: "#ffff",
    fontWeight: "200",
    fontSize: 20
  }
});