import React from 'react';
import { Circle, Path, Rect, Svg } from 'react-native-svg';

interface BatteryInstallIconProps {
  size?: number;
  color?: string;
}

export default function BatteryInstallIcon({ size = 80, color = '#E41E26' }: BatteryInstallIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80">
      {/* Battery body */}
      <Rect
        x="20"
        y="30"
        width="40"
        height="26"
        rx="2"
        fill={color}
      />
      {/* Battery terminals on top */}
      <Rect x="28" y="26" width="8" height="4" rx="1" fill="#555" />
      <Rect x="44" y="26" width="8" height="4" rx="1" fill="#555" />
      
      {/* Lightning bolt */}
      <Path
        d="M40 34 L36 42 L40 42 L38 50 L46 40 L42 40 L44 34 Z"
        fill="white"
      />
      
      {/* Checkmark circle */}
      <Circle
        cx="62"
        cy="52"
        r="11"
        fill="#555"
      />
      <Path
        d="M56 52 L60 56 L68 46"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}
