import React from 'react';
import { Path, Rect, Svg } from 'react-native-svg';

interface LubricantIconProps {
  size?: number;
  color?: string;
}

export default function LubricantIcon({ size = 64, color = '#E41E26' }: LubricantIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {/* Oil can body */}
      <Path
        d="M18 22 L18 52 C18 54 19 56 21 56 L43 56 C45 56 46 54 46 52 L46 22 Z"
        fill={color}
      />
      {/* Cap/Top */}
      <Rect
        x="20"
        y="18"
        width="24"
        height="6"
        rx="2"
        fill={color}
      />
      {/* Handle */}
      <Path
        d="M46 28 C46 28 50 28 52 30 C54 32 54 36 52 38 C50 40 46 40 46 40"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Oil drop */}
      <Path
        d="M32 32 C32 32 28 36 28 40 C28 43 29.8 45 32 45 C34.2 45 36 43 36 40 C36 36 32 32 32 32 Z"
        fill="white"
        opacity="0.7"
      />
    </Svg>
  );
}
