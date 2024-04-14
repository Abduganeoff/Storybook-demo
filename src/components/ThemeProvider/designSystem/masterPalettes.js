export const grey = {
  50: '#FBFBFB',
  100: '#F4F4F4',
  200: '#E6E6E6',
  300: '#CDCDCD',
  400: '#B3B3B3',
  500: '#989898',
  600: '#737373',
  700: '#545454',
  800: '#3B3B3B',
  900: '#2E2E2E',
  A100: '#242424',
  A200: '#141414',
};

export const blue = {
  50: '#E9EEFF',
  100: '#C1D0FF',
  200: '#A3BAFF',
  300: '#7B9CFF',
  400: '#3D6DFF',
  500: '#003FFE',
  600: '#0025CB',
  700: '#001897',
  800: '#00106E',
  900: '#000A4C',
};

export const red = {
  50: '#FFE9E9',
  100: '#FFC1C1',
  200: '#FFA3A3',
  300: '#FE7B7B',
  400: '#FE3D3D',
  500: '#FF0000',
  600: '#CA0000',
  700: '#960000',
  800: '#6D0000',
  900: '#4C0000',
};

export const green = {
  50: '#E9F8E9',
  100: '#C1EAC1',
  200: '#A3E1A3',
  300: '#7BD37B',
  400: '#3DBF3D',
  500: '#00AC00',
  600: '#008400',
  700: '#005E00',
  800: '#004300',
  900: '#002E00',
};

export const orange = {
  50: '#FFF9E9',
  100: '#FFEEC1',
  200: '#FFE6A3',
  300: '#FEDB7B',
  400: '#FECA3D',
  500: '#FFBA00',
  600: '#CA9100',
  700: '#966800',
  800: '#6D4A00',
  900: '#4C3200',
};

export const lightBlue = {
  50: '#E9F6FF',
  100: '#C1E5FF',
  200: '#A3D9FF',
  300: '#7BC8FF',
  400: '#3DAEFF',
  500: '#0095FF',
  600: '#0071CB',
  700: '#005097',
  800: '#00386E',
  900: '#00264C',
};

export const common = {
  black: '#212222',
  white: '#FFF',
  contrastText: '#FFF',
};

export const neutral = {
  light: {
    0: common.white,
    1: grey[100],
    2: grey[200],
    3: grey[300],
    4: grey[400],
    5: grey[500],
    inverted: grey.A200,
    base: grey[50],
  },
  dark: {
    0: grey.A100,
    1: grey[900],
    2: grey[800],
    3: grey[700],
    4: grey[600],
    5: grey[500],
    inverted: grey[50],
    base: grey.A200,
  },
};

export const text = {
  light: {
    primary: grey.A200,
    secondary: grey[700],
    disabled: grey[500],
    inverted: common.white,
  },
  dark: {
    primary: grey[50],
    secondary: grey[600],
    disabled: grey[500],
    inverted: grey.A200,
  },
};
