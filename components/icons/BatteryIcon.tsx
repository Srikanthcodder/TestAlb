import React from 'react';
import { Line, Path, Rect, Svg } from 'react-native-svg';

interface BatteryIconProps {
  size?: number;
  color?: string;
}

export default function BatteryIcon({ size = 64, color = '#E41E26' }: BatteryIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {/* Battery body */}
      <Rect
        x="12"
        y="22"
        width="40"
        height="30"
        rx="2"
        fill={color}
      />
      {/* Battery terminals top */}
      <Rect
        x="22"
        y="16"
        width="6"
        height="6"
        rx="1"
        fill="#555"
      />
      <Rect
        x="36"
        y="16"
        width="6"
        height="6"
        rx="1"
        fill="#555"
      />
      {/* Lightning bolt */}
      <Path
        d="M32 28 L28 37 L32 37 L30 44 L38 34 L34 34 L36 28 Z"
        fill="white"
      />
      {/* Plus symbol on left terminal */}
      <Line
        x1="25"
        y1="19"
        x2="25"
        y2="19"
        stroke="white"
        strokeWidth="1.5"
      />
      {/* Minus symbol on right terminal */}
      <Line
        x1="39"
        y1="19"
        x2="39"
        y2="19"
        stroke="white"
        strokeWidth="1.5"
      />
    </Svg>
  );
}
