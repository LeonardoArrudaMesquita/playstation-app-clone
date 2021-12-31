import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './routes';

export function RoutesContainer() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
