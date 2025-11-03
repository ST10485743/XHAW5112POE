import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

type Props = { checked: boolean; onToggle: () => void; };

export default function Checkbox({ checked, onToggle }: Props) {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.box}>
      {checked && <View style={styles.fill} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: { width: 28, height: 28, borderRadius: 6, borderWidth: 1, borderColor: '#bbb', justifyContent: 'center', alignItems: 'center' },
  fill: { width: 16, height: 16, borderRadius: 4, backgroundColor: '#5840FF' },
});
