import React from "react";
import {Text } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../../screens/Home";
import Sobre from "../../screens/MessagesScreen.js";

const Tab = createBottomTabNavigator();
const TabUser = ()=> {
    return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Sobre' component={Sobre}/>
      </Tab.Navigator>
    </NavigationContainer>
    );
}
  
export default TabUser;

