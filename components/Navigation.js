import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Home from '../Home';
import Selected_Items from '../Selected_Items';
import Print from './Print';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => (
      <BottomNavigation {...props} appearance="noIndicator">
        <BottomNavigationTab title={() => <Text>Home</Text>} />
        <BottomNavigationTab title={() => <Text>Selected Items</Text>} />
        <BottomNavigationTab title={() => <Text>Print</Text>} />
      </BottomNavigation>
    )}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Selected Items" component={Selected_Items} />
    <Tab.Screen name="Print" component={Print} />
  </Tab.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigation;