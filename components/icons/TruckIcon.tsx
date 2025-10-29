import React from 'react';
import { Circle, Path, Rect, Svg } from 'react-native-svg';

interface TruckIconProps {
  size?: number;
  color?: string;
}

export default function TruckIcon({ size = 80, color = '#E41E26' }: TruckIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80">
      {/* Truck cargo bed */}
      <Rect
        x="35"
        y="25"
        width="30"
        height="20"
        rx="2"
        fill={color}
      />
      {/* Truck cabin */}
      <Rect
        x="15"
        y="30"
        width="22"
        height="15"
        rx="2"
        fill={color}
      />
      {/* Cabin window */}
      <Rect
        x="18"
        y="32"
        width="8"
        height="8"
        fill="white"
        opacity="0.7"
      />
      {/* Cabin door line */}
      <Path
        d="M28 30 L28 45"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* Wheels */}
      <Circle cx="25" cy="45" r="6" fill="#333" />
      <Circle cx="25" cy="45" r="3" fill="#999" />
      <Circle cx="55" cy="45" r="6" fill="#333" />
      <Circle cx="55" cy="45" r="3" fill="#999" />
      {/* Cargo bed details */}
      <Path
        d="M40 25 L40 45 M50 25 L50 45 M60 25 L60 45"
        stroke="white"
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Front bumper */}
      <Rect
        x="13"
        y="38"
        width="2"
        height="6"
        fill="#333"
      />
    </Svg>
  );
}
