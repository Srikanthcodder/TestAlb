import React from 'react';
import { Circle, Path, Svg } from 'react-native-svg';

interface CarWashDoorToDoorIconProps {
  size?: number;
  color?: string;
}

export default function CarWashDoorToDoorIcon({ size = 64, color = '#E41E26' }: CarWashDoorToDoorIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {/* Person */}
      <Circle cx="18" cy="16" r="5" fill="#333" />
      <Path
        d="M18 22 L18 36 M18 28 L12 32 M18 28 L24 32 M18 36 L14 48 M18 36 L22 48"
        stroke="#333"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Car */}
      <Path
        d="M32 28 L36 24 L52 24 L56 28 L56 42 L32 42 Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
      {/* Car windows */}
      <Path
        d="M38 26 L40 28 L50 28 L52 26"
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      {/* Car wheels */}
      <Circle cx="38" cy="42" r="4" fill="#333" />
      <Circle cx="50" cy="42" r="4" fill="#333" />
      {/* Car door */}
      <Path
        d="M44 28 L44 38"
        stroke="white"
        strokeWidth="1.5"
      />
    </Svg>
  );
}
