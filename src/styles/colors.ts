type Neutral = 'white' | 'grayDark' | 'grayMedium' | 'black';
export const neutral: Record<Neutral, string> = {
  white: '#ffffff',
  grayDark: '#121D23',
  grayMedium: '#4C6878',
  black: '#000000',
};

type Primary = 'base' | 'dark' | 'light' | 'lighter' | 'medium';
export const primary: Record<Primary, string> = {
  base: '#540D6E',
  medium: '#7E508D',
  dark: '#3C094C',
  light: '#DFD7E1',
  lighter: '#F3F2F7',
};

type Secondary = 'base';
export const secondary: Record<Secondary, string> = {
  base: '#FFCE00',
};

type Danger = 'base';
export const danger: Record<Danger, string> = {
  base: '#D8104C',
};

type Success = 'base';
export const success: Record<Success, string> = {
  base: '#008a09',
};

type Warning = 'base';
export const warning: Record<Warning, string> = {
  base: '#cf9700',
};
