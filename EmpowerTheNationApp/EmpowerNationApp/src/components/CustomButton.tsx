import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
};

export default function CustomButton({ title, onPress, style, textStyle }: Props) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#5840FF',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginVertical: 8,
    alignItems: 'center',
  },
  text: { color: '#fff', fontWeight: '700' },
});
