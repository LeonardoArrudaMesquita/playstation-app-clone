import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Text } from 'react-native';

export function Play() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(() => {
      title: 'No title';
    });
  }, [navigation]);

  return <Text>Play</Text>;
}
