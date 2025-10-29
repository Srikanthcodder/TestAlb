import React from 'react';
import { Circle, Path, Rect, Svg } from 'react-native-svg';

interface EquipmentIconProps {
  size?: number;
  color?: string;
}

export default function EquipmentIcon({ size = 64, color = '#555' }: EquipmentIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {/* Car lift posts */}
      <Rect
        x="14"
        y="12"
        width="4"
        height="40"
        fill={color}
      />
      <Rect
        x="46"
        y="12"
        width="4"
        height="40"
        fill={color}
      />
      {/* Lift base */}
      <Rect
        x="10"
        y="52"
        width="44"
        height="4"
        fill={color}
      />
      {/* Car body on lift */}
      <Path
        d="M20 28 L22 24 L42 24 L44 28 L44 38 L20 38 Z"
        fill="#E41E26"
      />
      {/* Car windows */}
      <Path
        d="M24 26 L26 28 L38 28 L40 26 Z"
        fill="white"
        opacity="0.5"
      />
      {/* Car wheels */}
      <Circle
        cx="26"
        cy="38"
        r="3"
        fill="#333"
      />
      <Circle
        cx="38"
        cy="38"
        r="3"
        fill="#333"
      />
      {/* Lift arms */}
      <Rect
        x="18"
        y="36"
        width="10"
        height="2"
        fill={color}
      />
      <Rect
        x="36"
        y="36"
        width="10"
        height="2"
        fill={color}
      />
    </Svg>
  );
}
