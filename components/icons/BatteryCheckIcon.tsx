import React from 'react';
import { Circle, Path, Rect, Svg } from 'react-native-svg';

interface BatteryCheckIconProps {
  size?: number;
  color?: string;
}

export default function BatteryCheckIcon({ size = 80, color = '#E41E26' }: BatteryCheckIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80">
      {/* Battery body */}
      <Rect
        x="20"
        y="28"
        width="40"
        height="28"
        rx="3"
        fill={color}
      />
      {/* Battery terminals */}
      <Rect x="28" y="24" width="8" height="4" rx="1" fill="#555" />
      <Rect x="44" y="24" width="8" height="4" rx="1" fill="#555" />
      
      {/* Plus symbol */}
      <Path
        d="M32 34 L32 46 M26 40 L38 40"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Minus symbol */}
      <Path
        d="M46 40 L54 40"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Refresh/check circle */}
      <Circle
        cx="60"
        cy="52"
        r="12"
        fill="white"
        stroke="#555"
        strokeWidth="2"
      />
      <Path
        d="M60 46 C64 46 68 50 68 54 M60 46 L60 50 M60 46 L56 46"
        stroke="#555"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </Svg>
  );
}
