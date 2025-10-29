import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

interface TireIconProps {
  size?: number;
  color?: string;
}

export default function TireIcon({ size = 64, color = '#333' }: TireIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {/* Outer tire circle */}
      <Circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        stroke={color}
        strokeWidth="6"
      />
      {/* Inner hub circle */}
      <Circle
        cx="32"
        cy="32"
        r="12"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      {/* Spokes */}
      <Path
        d="M32 20 L32 44"
        stroke={color}
        strokeWidth="2"
      />
      <Path
        d="M20 32 L44 32"
        stroke={color}
        strokeWidth="2"
      />
      <Path
        d="M23.5 23.5 L40.5 40.5"
        stroke={color}
        strokeWidth="2"
      />
      <Path
        d="M23.5 40.5 L40.5 23.5"
        stroke={color}
        strokeWidth="2"
      />
      {/* Tread pattern marks */}
      <Path
        d="M32 4 L32 8"
        stroke={color}
        strokeWidth="3"
      />
      <Path
        d="M32 56 L32 60"
        stroke={color}
        strokeWidth="3"
      />
      <Path
        d="M4 32 L8 32"
        stroke={color}
        strokeWidth="3"
      />
      <Path
        d="M56 32 L60 32"
        stroke={color}
        strokeWidth="3"
      />
    </Svg>
  );
}
