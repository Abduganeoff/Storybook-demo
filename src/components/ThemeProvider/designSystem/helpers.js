/**
 * @description Helper function to generate palette, this not only creates a single
 * palette but also ensures that every palette will have the same structure.
 * */

/**
 * @description get single color palette
 * */
export const makePalette = ({
  main,
  dark,
  light,
  contrastText = '#FFF',
} = {}) => ({
  main,
  dark,
  light,
  contrastText,
});
/**
 * @description Helper function to generate palette from master color palette, this not only creates a single
 * Mui palette but also ensures that every palette will have the same structure.
 * */

/**
 * @description get single color palette
 * */
export const makeMuiPalette = (palette = {}, overrides = {}) => {
  // If palette is a valid DS palette with 10 shades, overrides works as a source of non-standard shades.
  const dsPalette = Object.keys(palette).length === 10;
  if (dsPalette) {
    const {
      main = 500,
      dark = 600,
      light = 100,
      contrastText = '#FFF',
    } = overrides;
    return {
      main: palette[main] ?? main,
      dark: palette[dark] ?? dark,
      light: palette[light] ?? light,
      contrastText: palette[contrastText] ?? contrastText,
    };
  }
  // Else proceed with Mui logic
  return { contrastText: '#fff', ...palette };
};

/**
 * @description get input palette for different states of input
 * */
export const makeInputPalette = ({ background, border } = {}) => ({
  background,
  border,
});

/**
 * @description helper method to create a consistent shadow palette
 * @reference https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/shadows.js#L5
 */
export const makeShadows = (type, ...px) => {
  const shadowKeyUmbraOpacity = 0.08;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.5;
  const shadowColors = {
    light: ['33,34,34', '0,0,0', '221,221,221'],
    dark: ['0,0,0', '0,0,0', '0,0,0'],
  };
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(${shadowColors[type][0]},${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(${shadowColors[type][1]},${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(${shadowColors[type][2]},${shadowAmbientShadowOpacity})`,
  ].join(',');
};
