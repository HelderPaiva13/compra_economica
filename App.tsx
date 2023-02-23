/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Lista from './src/screens/Lista';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { ChatText, ListPlus, House } from 'phosphor-react-native';
import MessagesScreen from './src/screens/MessagesScreen.js';
import ChatScreen from './src/screens/ChatScreen';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer >
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
    
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
