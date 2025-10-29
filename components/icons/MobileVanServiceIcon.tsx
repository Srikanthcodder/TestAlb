import React from 'react';
import { Circle, Path, Rect, Svg } from 'react-native-svg';

interface MobileVanServiceIconProps {
  size?: number;
  color?: string;
}

export default function MobileVanServiceIcon({ size = 64, color = '#555' }: MobileVanServiceIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {/* Van body */}
      <Path
        d="M12 24 L12 38 L16 38 L16 40 L20 40 L20 38 L44 38 L44 40 L48 40 L48 38 L52 38 L52 28 L44 24 Z"
        fill={color}
      />
      {/* Van front */}
      <Rect
        x="8"
        y="28"
        width="4"
        height="10"
        rx="1"
        fill={color}
      />
      {/* Van windows */}
      <Rect
        x="14"
        y="26"
        width="8"
        height="6"
        fill="white"
        opacity="0.7"
      />
      <Rect
        x="24"
        y="26"
        width="8"
        height="6"
        fill="white"
        opacity="0.7"
      />
      {/* Van wheels */}
      <Circle cx="18" cy="40" r="4" fill="#333" />
      <Circle cx="46" cy="40" r="4" fill="#333" />
      <Circle cx="18" cy="40" r="2" fill="#999" />
      <Circle cx="46" cy="40" r="2" fill="#999" />
      
      {/* Wrench tool on top */}
      <Path
        d="M34 14 L38 14 C38 14 40 14 40 16 C40 18 38 18 38 18 L34 18 C34 18 32 18 32 16 C32 14 34 14 34 14 Z"
        fill={color}
      />
      <Rect
        x="35"
        y="12"
        width="2"
        height="6"
        fill={color}
      />
      {/* Wrench head */}
      <Circle
        cx="36"
        cy="10"
        r="3"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />
    </Svg>
  );
}
