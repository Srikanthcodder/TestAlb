import React from 'react';
import { Circle, Line, Path, Svg } from 'react-native-svg';

interface AccessoriesIconProps {
  size?: number;
  color?: string;
}

export default function AccessoriesIcon({ size = 64, color = '#E41E26' }: AccessoriesIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {/* Wrench */}
      <Path
        d="M18 42 L22 38 L28 44 L24 48 C22 50 18 50 16 48 C14 46 14 44 16 42 Z"
        fill={color}
      />
      <Path
        d="M28 36 L32 32 L38 38 L34 42 Z"
        fill={color}
      />
      <Circle
        cx="40"
        cy="24"
        r="6"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      
      {/* Screwdriver */}
      <Path
        d="M36 28 L52 44"
        stroke="#555"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M52 44 L56 48 L48 56 L44 52 Z"
        fill="#E41E26"
      />
      <Circle
        cx="54"
        cy="46"
        r="1.5"
        fill="white"
      />
      
      {/* Tools handle grip lines */}
      <Line
        x1="40"
        y1="32"
        x2="42"
        y2="34"
        stroke="white"
        strokeWidth="1"
        opacity="0.5"
      />
      <Line
        x1="44"
        y1="36"
        x2="46"
        y2="38"
        stroke="white"
        strokeWidth="1"
        opacity="0.5"
      />
    </Svg>
  );
}
