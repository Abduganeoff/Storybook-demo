import { makeMuiPalette, makeInputPalette, makeShadows } from './helpers.js';
import {
  neutral as neutralMaster,
  common,
  blue,
  grey,
  red,
  orange,
  green,
  lightBlue,
  text as textMaster,
} from './masterPalettes.js';

export const palette = {
  primary: makeMuiPalette(blue),
  secondary: makeMuiPalette({
    main: neutralMaster.light[1],
    dark: neutralMaster.light[2],
    light: neutralMaster.light.base,
    contrastText: textMaster.light.primary,
  }),
  tertiary: makeMuiPalette({
    main: neutralMaster.light[0],
    dark: neutralMaster.light[2],
    light: neutralMaster.light[0],
    contrastText: blue[500],
  }),
  success: makeMuiPalette(green, { main: 500, dark: 600, light: 100 }),
  warning: makeMuiPalette(orange, { main: 500, dark: 600, light: 100 }),
  error: makeMuiPalette(red, { main: 500, dark: 600, light: 100 }),
  info: makeMuiPalette(lightBlue, { main: 500, dark: 600, light: 100 }),
  iso: {
    active: '#00AC00',
    slightly_degraded: '#B2DE56',
    degraded: '#FF8A00',
    critical: '#FF0000',
    offline: '#7F7F7F',
  },
  text: textMaster.light,
  neutral: neutralMaster.light,
  common,
  grey,
  blue,
  red,
  orange,
  green,
  lightBlue,
  background: {
    paper: neutralMaster.light[0],
    default: neutralMaster.light[1],
  },
  input: {
    active: makeInputPalette({
      background: neutralMaster.light[0],
      border: neutralMaster.light[4],
    }),
    hover: makeInputPalette({
      background: neutralMaster.light.base,
      border: neutralMaster.light[5],
    }),
    focus: makeInputPalette({
      background: neutralMaster.light[0],
      border: blue[500],
    }),
    disable: makeInputPalette({
      background: neutralMaster.light[1],
      border: neutralMaster.light[3],
    }),
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  dataPoints: {
    info: '#0095FF',
    aqua: '#43E0E0',
    mauve: '#9A7077',
    violet: '#794EBE',
    pink: '#F577F0',
    gold: '#B2A053',
    rose: '#BB4576',
    rouge: '#FD6B7B',
    slate: '#7B8EAB',
    indigo: '#5160E4',
  },
  transparent: {
    blue: 'rgba(19, 124, 189, 0.6)',
    grey: 'rgba(0, 0, 0, 0.23)',
  },
};

palette.dataPoints[Symbol.iterator] = function* () {
  yield* Object.values(this);
};

export const paletteDark = {
  primary: makeMuiPalette(blue, {
    main: 300,
    dark: 400,
    light: 200,
    contrastText: palette.grey.A200,
  }),
  secondary: makeMuiPalette({
    main: neutralMaster.dark[1],
    dark: neutralMaster.dark[2],
    light: neutralMaster.dark.base,
    contrastText: textMaster.dark.primary,
  }),
  tertiary: makeMuiPalette({
    main: neutralMaster.dark[0],
    dark: neutralMaster.dark[2],
    light: neutralMaster.dark[0],
    contrastText: blue[500],
  }),
  success: makeMuiPalette(green, {
    main: 300,
    dark: 400,
    light: 200,
    contrastText: textMaster.dark.inverted,
  }),
  warning: makeMuiPalette(orange, {
    main: 300,
    dark: 400,
    light: 200,
    contrastText: textMaster.dark.inverted,
  }),
  error: makeMuiPalette(red, {
    main: 300,
    dark: 400,
    light: 200,
    contrastText: textMaster.dark.inverted,
  }),
  info: makeMuiPalette(lightBlue, {
    main: 300,
    dark: 400,
    light: 200,
    contrastText: textMaster.dark.inverted,
  }),
  iso: {
    active: '#7BD37B',
    slightly_degraded: '#CCED87',
    degraded: '#FFBA68',
    critical: '#FE7B7B',
    offline: '#B3B3B3',
  },
  text: textMaster.dark,
  neutral: neutralMaster.dark,
  common,
  grey,
  blue,
  red,
  orange,
  green,
  lightBlue,
  background: {
    paper: neutralMaster.dark[0],
    default: neutralMaster.dark[1],
  },
  input: {
    active: makeInputPalette({
      background: neutralMaster.dark[0],
      border: neutralMaster.dark[4],
    }),
    hover: makeInputPalette({
      background: neutralMaster.dark.base,
      border: neutralMaster.dark[5],
    }),
    focus: makeInputPalette({
      background: neutralMaster.dark[0],
      border: blue[500],
    }),
    disable: makeInputPalette({
      background: neutralMaster.dark[1],
      border: neutralMaster.dark[3],
    }),
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  dataPoints: {
    info: '#0095FF',
    aqua: '#43E0E0',
    mauve: '#9A7077',
    violet: '#794EBE',
    pink: '#F577F0',
    gold: '#B2A053',
    rose: '#BB4576',
    rouge: '#FD6B7B',
    slate: '#7B8EAB',
    indigo: '#5160E4',
  },
  transparent: {
    blue: 'rgba(19, 124, 189, 0.6)',
    grey: 'rgba(0, 0, 0, 0.23)',
  },
};

paletteDark.dataPoints[Symbol.iterator] = function* () {
  yield* Object.values(this);
};

export const spacing = [0, 2, 4, 8, 16, 24, 32, 40, 48, 64, 80, 120];

export const typography = {
  h1: {
    fontWeight: 300,
    fontSize: '4.5rem',
    lineHeight: '5.5rem',
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontWeight: 300,
    fontSize: '3.75rem',
    lineHeight: '5.5rem',
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontWeight: 400,
    fontSize: '3rem',
    lineHeight: '4.5rem',
    letterSpacing: '0',
  },
  h4: {
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: '3rem',
    letterSpacing: '0.00735em',
  },
  h5: {
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
    letterSpacing: '0',
  },
  h6: {
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: '2rem',
    letterSpacing: '0.0075em',
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.00938em',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.00714em',
  },
  body1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.00938em',
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.01071em',
  },
  button: {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
    textTransform: 'capitalize',
    letterSpacing: '0.02857em',
  },
  caption: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.03333em',
  },
  overline: {
    fontWeight: 400,
    fontSize: '0.625rem',
    lineHeight: '1rem',
    letterSpacing: '0.08333em',
  },
};

export const elevation = [
  'none',
  makeShadows('light', 0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
  makeShadows('light', 0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
  makeShadows('light', 0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
  makeShadows('light', 0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  makeShadows('light', 0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
];

export const elevationDark = [
  'none',
  makeShadows('dark', 0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1),
  makeShadows('dark', 0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2),
  makeShadows('dark', 0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2),
  makeShadows('dark', 0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
  makeShadows('dark', 0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
];
