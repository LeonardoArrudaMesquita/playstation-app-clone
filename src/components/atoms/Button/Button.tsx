import React from 'react';
import { TouchableOpacity, Text, ColorValue } from 'react-native';

import { styles } from './styles';

export type Props = {
  title: string;
  backgroundColor: ColorValue;
};

export default function Button({ title, backgroundColor }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      activeOpacity={1}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
