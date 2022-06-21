import { Dimensions } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('screen');

type Screen = 'width' | 'height';
export const screen: Record<Screen, number> = {
  width: screenWidth,
  height: screenHeight,
};

export const xxs = 2;
export const xs = 4;
export const sm = 8;
export const md = 16;
export const lg = 24;
export const xl = 32;
export const xxl = 40;

type Icons = 'sm' | 'md' | 'lg' | 'xl';
export const icons: Record<Icons, number> = {
  sm: 14,
  md: 17,
  lg: 20,
  xl: 25,
};

type IconStroke = 'x1' | 'x2';
export const iconStroke: Record<IconStroke, number> = {
  x1: 1,
  x2: 2,
};
