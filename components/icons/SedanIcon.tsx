import React from 'react';
import { Circle, Path, Rect, Svg } from 'react-native-svg';

interface SedanIconProps {
  size?: number;
  color?: string;
}

export default function SedanIcon({ size = 80, color = '#E41E26' }: SedanIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80">
      {/* Car body */}
      <Path
        d="M15 35 L20 28 L35 28 L40 32 L60 32 L65 35 L65 50 L15 50 Z"
        fill={color}
      />
      {/* Car roof/cabin */}
      <Path
        d="M25 28 L30 22 L50 22 L55 28"
        fill={color}
      />
      {/* Windows */}
      <Rect
        x="27"
        y="24"
        width="10"
        height="6"
        fill="white"
        opacity="0.7"
      />
      <Rect
        x="43"
        y="24"
        width="10"
        height="6"
        fill="white"
        opacity="0.7"
      />
      {/* Wheels */}
      <Circle cx="25" cy="50" r="6" fill="#333" />
      <Circle cx="25" cy="50" r="3" fill="#999" />
      <Circle cx="55" cy="50" r="6" fill="#333" />
      <Circle cx="55" cy="50" r="3" fill="#999" />
      {/* Wheel arches */}
      <Path
        d="M15 45 Q25 35 35 45"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      <Path
        d="M45 45 Q55 35 65 45"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </Svg>
  );
}
