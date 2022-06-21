import { TextStyle } from 'react-native';

import * as Colors from './colors';
import * as Outlines from './outlines';
import * as Sizing from './sizing';
import * as Typography from './typography';

type Input = 'primary';
export const input: Record<Input, TextStyle> = {
  primary: {
    ...Typography.body.default,
    lineHeight: 0,
    padding: Sizing.md,
    borderColor: Colors.neutral.grayMedium,
    borderWidth: Outlines.borderWidth.hairline,
    borderRadius: Outlines.borderRadius.small,
  },
};

type InputLabel = 'primary';
export const inputLabel: Record<InputLabel, TextStyle> = {
  primary: {
    ...Typography.body.label,
    marginBottom: Sizing.sm,
  },
};
