import React, { ReactNode } from 'react';
import { ColorValue, View } from 'react-native';

import { styles } from './styles';

export type Props = {
  children: ReactNode;
};

export function Background({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}
