import React from "react";
import { ImageBackground, StyleSheet, Text, View,TextInput, TouchableOpacity, Image} from "react-native";
import firebase from 'firebase'
import db from '../config'
import * as Permissions from 'expo-permissions'
import MyHeader from "../components/Header";


export default class ReviewScreen extends React.Component{
    constructor(){
        super()
        this.state={
            hasCameraPermissions:null,
            buttonState: '',
            scanned:false
        }
    }

    getCameraPermissions = async (id) =>{
        const {status}  = await Permissions.askAsync(Permissions.CAMERA);
    
        this.setState({
          /*status === "granted" is true when user has granted permission
            status === "granted" is false when user has not granted the permission
          */
          hasCameraPermissions : status === "granted",
          buttonState : id,
          scanned : false
        })
      }
    render(){
        return(
          <View>
            <View style={{flex:1, justifyContent:'center'}}>
                    <MyHeader title={"Review Screen"} navigation={this.props.navigation}/>
                </View>
         
            <View style={styles.container}>
                <TextInput
            style={styles.loginBox}
            placeholder="Type Something..."
           
            onChangeText={text => {
              this.setState({
                emailId: text
              });
            }}>
                </TextInput>
            <TouchableOpacity
            style={{width:30, height:30}}
            onPress={()=>{
                this.getCameraPermissions()
            }}>
                <Image
                style={{width:30, height:30}}
                source={require("../assets/images.png")}>
                </Image>
            </TouchableOpacity> 
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems:'center',
      marginTop:600, 
      marginLeft:600
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
      borderWidth: 1.5,
      borderColor: "#000000",
      fontSize: 20,
      margin: 10,
      paddingLeft: 10, 
      alignSelf:'center', 
      color:'#000000', 
      borderRadius:50
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