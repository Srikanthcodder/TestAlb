import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BackButtonProps {
  onPress: (event: GestureResponderEvent) => void;
}

export default function BackButton({ onPress }: BackButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.backButton}
      hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
      activeOpacity={0.6}
    >
      <Text style={styles.backIcon}>←</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    padding: 16,
    marginTop: -14,
    minWidth: 60,
    minHeight: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 36,
    color: '#000',
  },
});
