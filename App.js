import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import VegetableScreen from './Screens/VegetableScreen.js'
import ReviewScreen from "./Screens/ReviewScreen.js";
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import  {AppDrawerNavigator}  from './components/AppDrawerNavigator';

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <AppContainer/>
        </SafeAreaProvider>
      
    )  
  }
}




const switchNavigator = createSwitchNavigator({
  VegetableScreen:{screen:VegetableScreen}, 
  ReviewScreen:{screen:ReviewScreen},
  Drawer:{screen:AppDrawerNavigator}
})
const AppContainer = createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
 
});

