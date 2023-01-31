import { DefaultTheme } from 'styled-components';

export const palette = {
  MAIN_COLOR: '#4da64d',
  SUB_50: '#cce6cc',
  SUB_100: '#66b366',
  SUB_200: '#80c080',
  WHITE: '#ffffff',
  BLACK: '#000000',
  RED: '#ff0000',

  GRAY_50: '#f7f7f7',
  GRAY_100: '#e3e3e3',
  GRAY_200: '#c8c8c8',
  GRAY_300: '#a4a4a4',
  GRAY_400: '#808080',
  GRAY_500: '#666666',
  GRAY_600: '#515151',
  GRAY_700: '#434343',
  GRAY_800: '#383838',
  GRAY_900: '#313131',
} as const;

const theme: DefaultTheme = {
  palette,
};

export default theme;
