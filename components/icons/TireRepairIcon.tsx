import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

interface TireRepairIconProps {
  size?: number;
  color?: string;
}

export default function TireRepairIcon({ size = 80, color = '#E41E26' }: TireRepairIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80">
      {/* Tire/wheel */}
      <Circle
        cx="40"
        cy="40"
        r="20"
        fill={color}
      />
      {/* Inner circle */}
      <Circle
        cx="40"
        cy="40"
        r="10"
        fill="white"
      />
      {/* Star/bolt pattern */}
      <Path
        d="M40 34 L42 38 L46 38 L43 41 L44 45 L40 43 L36 45 L37 41 L34 38 L38 38 Z"
        fill="#555"
      />
      
      {/* Repair indicators */}
      <Path
        d="M48 25 L52 21"
        stroke="#333"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M52 32 L58 30"
        stroke="#333"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M48 40 L56 40"
        stroke="#333"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
}
