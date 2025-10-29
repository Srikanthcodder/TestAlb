import React from 'react';
import { Path, Rect, Svg } from 'react-native-svg';

interface TintingProtectionIconProps {
  size?: number;
  color?: string;
}

export default function TintingProtectionIcon({ size = 64, color = '#E41E26' }: TintingProtectionIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64">
      {/* Film roll */}
      <Rect
        x="12"
        y="16"
        width="16"
        height="32"
        rx="2"
        fill={color}
      />
      {/* Film perforations */}
      <Rect x="14" y="20" width="3" height="4" fill="white" />
      <Rect x="14" y="28" width="3" height="4" fill="white" />
      <Rect x="14" y="36" width="3" height="4" fill="white" />
      <Rect x="21" y="20" width="3" height="4" fill="white" />
      <Rect x="21" y="28" width="3" height="4" fill="white" />
      <Rect x="21" y="36" width="3" height="4" fill="white" />
      
      {/* Shield/Protection */}
      <Path
        d="M44 16 L44 32 C44 38 40 42 36 44 C32 42 28 38 28 32 L28 16 L36 12 Z"
        fill="#333"
        stroke="#333"
        strokeWidth="2"
      />
      {/* Checkmark on shield */}
      <Path
        d="M32 28 L35 32 L40 24"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
