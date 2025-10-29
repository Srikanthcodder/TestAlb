import React from 'react';
import { Circle, Path, Rect, Svg } from 'react-native-svg';

interface SUVIconProps {
  size?: number;
  color?: string;
}

export default function SUVIcon({ size = 80, color = '#E41E26' }: SUVIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80">
      {/* SUV body - taller and more boxy */}
      <Rect
        x="15"
        y="28"
        width="50"
        height="20"
        rx="2"
        fill={color}
      />
      {/* SUV cabin/roof */}
      <Rect
        x="20"
        y="18"
        width="40"
        height="12"
        rx="2"
        fill={color}
      />
      {/* Windows */}
      <Rect
        x="23"
        y="20"
        width="12"
        height="8"
        fill="white"
        opacity="0.7"
      />
      <Rect
        x="45"
        y="20"
        width="12"
        height="8"
        fill="white"
        opacity="0.7"
      />
      {/* Front grille */}
      <Rect
        x="13"
        y="32"
        width="2"
        height="12"
        fill="#333"
      />
      {/* Wheels - larger for SUV */}
      <Circle cx="25" cy="48" r="7" fill="#333" />
      <Circle cx="25" cy="48" r="3.5" fill="#999" />
      <Circle cx="55" cy="48" r="7" fill="#333" />
      <Circle cx="55" cy="48" r="3.5" fill="#999" />
      {/* Side detail */}
      <Path
        d="M40 28 L40 44"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.5"
      />
    </Svg>
  );
}
