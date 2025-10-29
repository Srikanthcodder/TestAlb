import React from 'react';
import { Circle, Path, Rect, Svg } from 'react-native-svg';

interface CarWashServiceStationIconProps {
  size?: number;
  color?: string;
}

export default function CarWashServiceStationIcon({ size = 64, color = '#999' }: CarWashServiceStationIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {/* Building structure */}
      <Rect
        x="8"
        y="12"
        width="48"
        height="44"
        rx="2"
        fill="none"
        stroke={color}
        strokeWidth="3"
      />
      
      {/* Garage door opening */}
      <Rect
        x="16"
        y="32"
        width="32"
        height="24"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
      
      {/* Garage door horizontal lines */}
      <Path
        d="M16 38 L48 38 M16 44 L48 44 M16 50 L48 50"
        stroke={color}
        strokeWidth="1.5"
      />
      
      {/* Car inside */}
      <Path
        d="M24 40 L26 38 L38 38 L40 40 L40 48 L24 48 Z"
        fill={color}
        opacity="0.6"
      />
      {/* Car wheels */}
      <Circle cx="28" cy="48" r="2" fill={color} />
      <Circle cx="36" cy="48" r="2" fill={color} />
      
      {/* Roof line */}
      <Path
        d="M4 12 L32 4 L60 12"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  );
}
