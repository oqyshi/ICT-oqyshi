import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  WHITE, 
  BLUE, 
  screenWidth, 
  BLACK
} from './constants'

import Profile from './src/Profile'
import Starred from './src/Starred'
import HomeScreen from './src/Home'

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBj9fsaf7X83JQR74i2SngF26Clr6BUv7Y",
  authDomain: "oqyshi.firebaseapp.com",
  databaseURL: "https://oqyshi.firebaseio.com",
  projectId: "oqyshi",
  storageBucket: "",
  messagingSenderId: "976513806675",
  appId: "1:976513806675:web:b592e1cad66b8ec5"
};

firebase.initializeApp(firebaseConfig);


const MainNavigator = createBottomTabNavigator({
  'Education': {screen: HomeScreen},
  'Starred':   {screen: Starred},
  'Profile':   {screen: Profile},
},
{ initialRouteName:'Profile',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state

      let iconName
      if (routeName === 'Education') {
        iconName = `ios-${focused ? 'book' : 'journal'}`
      } else if (routeName === 'Profile') {
        iconName = 'ios-person'
      } else if (routeName === 'Starred') {
        iconName = 'ios-star'
      }
      return <Ionicons name={iconName} size={screenWidth * 0.065} color={tintColor} />
    },
  }),


  tabBarOptions: {
    activeTintColor: WHITE,
    inactiveTintColor: BLACK,
    style: { backgroundColor: BLUE, height: screenWidth * 0.07},
    tabStyle: { paddingTop: screenWidth * 0.01, },
    showLabel: false,
  },

}
)

const App = createAppContainer(MainNavigator)


export default App
