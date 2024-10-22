import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Print from './components/Print';
import Selected_Items from './Selected_Items';
import Home from './Home';
import { Ionicons } from '@expo/vector-icons';
import HomeProvider from './HomeContext';
// import firebase from 'expo-firebase-app';
// import 'firebase/firestore'; // Add more Firebase modules as needed

// const firebaseConfig = require('./firebase.js');

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <HomeProvider>
    <NavigationContainer>
      <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Print') {
        iconName = focused ? 'print' : 'print-outline';
      } else if (route.name === 'Selected Items') {
        iconName = focused ? 'fast-food' : 'fast-food-outline';
      }

      // Return the Ionicons component with the appropriate icon name
      return <Ionicons name={iconName} size={size} color={color} />;
      },
      })} >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Selected Items" component={Selected_Items} />
        <Tab.Screen name="Print" component={Print} />
      </Tab.Navigator>
    
    </NavigationContainer>
    
  </HomeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
