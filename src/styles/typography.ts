import { TextStyle } from 'react-native';
import { systemWeights } from 'react-native-typography';
import * as Colors from './colors';

type FontSize = 'h1' | 'h2' | 'h3' | 'body' | 'label' | 'info';
export const fontSize: Record<FontSize, TextStyle> = {
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 18,
  },
  body: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
  },
  info: {
    fontSize: 12,
  },
};

type FontWeight = 'regular' | 'semibold' | 'bold';
export const fontWeight: Record<FontWeight, TextStyle> = {
  regular: {
    ...systemWeights.regular,
  },
  semibold: {
    ...systemWeights.semibold,
  },
  bold: {
    ...systemWeights.bold,
  },
};

type LetterSpacing = 'sm' | 'md' | 'lg';
export const letterSpacing: Record<LetterSpacing, number> = {
  sm: 1,
  md: 2,
  lg: 3,
};

type LineHeight = 'h1' | 'h2' | 'h3' | 'body' | 'label' | 'info';
export const lineHeight: Record<LineHeight, TextStyle> = {
  h1: {
    lineHeight: 33,
  },
  h2: {
    lineHeight: 27,
  },
  h3: {
    lineHeight: 25,
  },
  body: {
    lineHeight: 22,
  },
  label: {
    lineHeight: 19,
  },
  info: {
    lineHeight: 16,
  },
};

type Header = 'h1' | 'h2' | 'h3';
export const header: Record<Header, TextStyle> = {
  h1: {
    ...fontSize.h1,
    ...lineHeight.h1,
    ...fontWeight.bold,
  },
  h2: {
    ...fontSize.h2,
    ...lineHeight.h2,
    ...fontWeight.bold,
  },
  h3: {
    ...fontSize.h3,
    ...lineHeight.h3,
    ...fontWeight.bold,
  },
};

type Body = 'default' | 'bold' | 'label' | 'boldLabel' | 'info' | 'boldInfo';
export const body: Record<Body, TextStyle> = {
  default: {
    ...fontSize.body,
    ...lineHeight.body,
    ...fontWeight.regular,
    color: Colors.neutral.grayDark,
  },
  bold: {
    ...fontSize.body,
    ...lineHeight.body,
    ...fontWeight.bold,
    color: Colors.neutral.grayDark,
  },
  label: {
    ...fontSize.label,
    ...lineHeight.label,
    ...fontWeight.regular,
    color: Colors.neutral.grayDark,
  },
  boldLabel: {
    ...fontSize.label,
    ...lineHeight.label,
    ...fontWeight.bold,
    color: Colors.neutral.grayDark,
  },
  info: {
    ...fontSize.info,
    ...lineHeight.info,
    ...fontWeight.regular,
    color: Colors.neutral.grayDark,
  },
  boldInfo: {
    ...fontSize.info,
    ...lineHeight.info,
    ...fontWeight.bold,
    color: Colors.neutral.grayDark,
  },
};

export const textPrimary = {
  color: Colors.primary.base,
};

export const textWhite = {
  color: Colors.neutral.white,
};

type OpenSans = 'base';
export const openSans: Record<OpenSans, TextStyle> = {
  base: {
    fontFamily: 'OpenSans-Regular',
    letterSpacing: letterSpacing.md,
  },
};
