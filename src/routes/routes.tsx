import React from 'react';

import {
  GameLibrary,
  Play,
  Explore,
  Store,
  Search,
} from '../components/screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export function AppRoutes() {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Jogar" component={Play} />
      <Screen name="Explorar" component={Explore} />
      <Screen name="PS Store" component={Store} />
      <Screen name="Biblioteca de jogos" component={GameLibrary} />
      <Screen name="Pesquisar" component={Search} />
    </Navigator>
  );
}
