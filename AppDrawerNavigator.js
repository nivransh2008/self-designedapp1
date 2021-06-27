import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
// import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import ReviewScreen from '../Screens/ReviewScreen';
export const AppDrawerNavigator = createDrawerNavigator({
  // MyDonations : {
  //   screen : MyDonationScreen
  // },
  Notification : {
    screen : NotificationScreen
  },
  ReviewScreen :{
    screen: ReviewScreen
  },
  Setting : {
    screen : SettingScreen
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
