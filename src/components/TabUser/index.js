import React from "react";
import {Text } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatText, ListPlus, House } from 'phosphor-react-native';
import Home from "../../screens/Home";
import Lista from "../../screens/Lista";
import MessagesScreen from "../../screens/MessagesScreen.js"

const Tab = createBottomTabNavigator();
const TabUser = ()=> {
    return (
      <Tab.Navigator>
      <Tab.Screen 
      name='Home' 
      component={Home} 
      options={{ tabBarIcon: () => 
        (<House size={32} />),
        headerShown: false
      }}/>

      <Tab.Screen 
      name='Lista' 
      component={Lista} 
      options={{tabBarIcon: () => 
        (<ListPlus size={32} />),
        headerShown: false
      }}/>
      <Tab.Screen 
      name='MessagesScreen' 
      component={MessagesScreen} 
      options={{tabBarIcon: () =>
        (<ChatText size={32} />),
        headerShown: false
      }}/>

    </Tab.Navigator>
    );
}
  
export default TabUser;

