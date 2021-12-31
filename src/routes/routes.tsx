import React from 'react';

import {
  GameLibrary,
  Play,
  Explore,
  Store,
  Search,
} from '../components/screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function Routes() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Play"
        component={Play}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="GameLibrary"
        component={GameLibrary}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
