import { TextStyle, ViewStyle, PressableStateCallbackType } from 'react-native';

import * as Colors from './colors';
import * as Outlines from './outlines';
import * as Sizing from './sizing';
import * as Typography from './typography';

type Bar = 'primary' | 'primaryInline' | 'secondary' | 'secondaryInline';
export const bar: Record<Bar, ViewStyle> = {
  primary: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Sizing.md,
    borderRadius: Outlines.borderRadius.large,
    backgroundColor: Colors.primary.base,
  },
  secondary: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Sizing.md,
    borderRadius: Outlines.borderRadius.large,
  },
  primaryInline: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: Sizing.sm,
    borderRadius: Outlines.borderRadius.large,
    backgroundColor: Colors.primary.base,
  },
  secondaryInline: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: Sizing.sm,
    borderRadius: Outlines.borderRadius.large,
  },
};

type BarText = 'primary' | 'secondary';
export const barText: Record<BarText, TextStyle> = {
  primary: {
    ...Typography.fontSize.body,
    ...Typography.fontWeight.semibold,
    color: Colors.neutral.white,
  },
  secondary: {
    ...Typography.fontSize.body,
    ...Typography.fontWeight.regular,
    color: Colors.primary.base,
  },
};

type Circular = 'primary';
export const circular: Record<Circular, ViewStyle> = {
  primary: {
    height: Sizing.md,
    width: Sizing.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary.base,
    borderRadius: Outlines.borderRadius.max,
  },
};

const opacity = (state: PressableStateCallbackType): ViewStyle => {
  return { opacity: state.pressed ? 0.65 : 1 };
};

export const applyOpacity = (style: ViewStyle) => {
  return (state: PressableStateCallbackType): ViewStyle => {
    return {
      ...style,
      ...opacity(state),
    };
  };
};

export const applyPrimary = (style: ViewStyle) => {
  return (state: PressableStateCallbackType): ViewStyle => {
    return {
      ...style,
      ...bar.primary,
      borderWidth: 1,
      backgroundColor: state.pressed ? Colors.primary.dark : Colors.primary.base,
    };
  };
};

export const applySecondary = (style: ViewStyle) => {
  return (state: PressableStateCallbackType): ViewStyle => {
    return {
      ...style,
      ...bar.secondary,
      borderWidth: 1,
      backgroundColor: state.pressed ? Colors.primary.light : Colors.primary.lighter,
    };
  };
};
