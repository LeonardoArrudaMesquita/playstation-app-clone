import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../../global/styles/theme';
import { Background, Button } from '../../atoms';

export function Play() {
  return (
    <Background>
      <View style={{ paddingHorizontal: 20 }}>
        <Button title="Exibir Jogo" backgroundColor={theme.colors.grey1} />
      </View>
    </Background>
  );
}
