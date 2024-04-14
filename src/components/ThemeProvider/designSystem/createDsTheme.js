import { merge } from "lodash-es";
import { createTheme } from "@mui/material/styles";

import { makeMuiPalette } from "./helpers.js";
import {
  elevation as dsElevation,
  palette as dsPalette,
  paletteDark as dsPaletteDark,
  elevationDark as dsElevationDark,
  spacing,
  typography,
} from "./designSystem.js";
import { grey, common, blue } from "./masterPalettes.js";
import { createDatePickerThemeOverrides } from "./themeOverridesOptions/createDatePickerThemeOverrides.js";
import { createDsOverrides } from "./themeOverridesOptions/createDsOverrides.js";

/**
 * Creates Mui theme based on Design System defaults
 *
 * @param config configuration allowed by Design System theme: font, fontFamily, primaryPalette, elevation
 * @param overrides object which will be deeply merged with the about to be returned theme
 *
 * @returns Mui theme object
 */
const createDsTheme = (config = {}, overrides = {}) => {
  const themeMode = {
    light: "light",
    dark: "dark",
  };
  const dsElevations = {
    [themeMode.light]: dsElevation,
    [themeMode.dark]: dsElevationDark,
  };
  const dsPalettes = {
    [themeMode.light]: dsPalette,
    [themeMode.dark]: dsPaletteDark,
  };
  const mode = themeMode[config.mode] ?? themeMode.light;
  const font = config.font ?? "Roboto";
  const primaryPalette = config.primaryPalette ?? blue;
  const elevation = config.elevation ?? dsElevations[mode];
  const fallbackFonts = `'${font}', 'Helvetica', 'Arial', 'sans-serif'`;
  const fontFamily = config.fontFamily ?? fallbackFonts;
  const palette = dsPalettes[mode];
  const dsPrimaryPalettes = {
    [themeMode.light]: makeMuiPalette(primaryPalette),
    [themeMode.dark]: makeMuiPalette(primaryPalette, {
      main: 300,
      dark: 400,
      light: 200,
      contrastText: palette.grey.A200,
    }),
  };
  const muiPrimaryPalette = dsPrimaryPalettes[mode];

  const {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    subtitle1,
    subtitle2,
    body1,
    body2,
    button,
    caption,
    overline,
  } = typography;

  const theme = {
    palette: {
      ...palette,
      primary: muiPrimaryPalette,
      tertiary: makeMuiPalette({
        main: palette.tertiary.main,
        dark: palette.tertiary.dark,
        light: palette.tertiary.light,
        contrastText: muiPrimaryPalette.main,
      }),
      grey,
      blue,
      common,
    },
    shadows: [...elevation, ...Array.from({ length: 19 }, () => elevation[5])], // we don't support elevations higher than 5
    spacing,
    typography: {
      /** The typography properties not set in DS are derived from MUI.
       * FontFamily set to all variants might overwrite that. */
      h1: { ...h1, fontFamily },
      h2: { ...h2, fontFamily },
      h3: { ...h3, fontFamily },
      h4: { ...h4, fontFamily },
      h5: { ...h5, fontFamily },
      h6: { ...h6, fontFamily },
      subtitle1: { ...subtitle1, fontFamily },
      subtitle2: { ...subtitle2, fontFamily },
      body1: { ...body1, fontFamily },
      body2: { ...body2, fontFamily },
      button: { ...button, fontFamily },
      caption: { ...caption, fontFamily },
      overline: { ...overline, fontFamily },
      fontFamily,
    },
    zIndex: {
      materialTableHeader: 10, // Used by 3rd party Material Table
    },
    overrides: {
      ...createDsOverrides({
        primaryPalette: muiPrimaryPalette,
        spacing,
        palette,
      }),
      ...createDatePickerThemeOverrides({
        primaryPalette: muiPrimaryPalette,
        spacing,
        elevation,
        palette,
      }),
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  };
  return createTheme(merge(theme, overrides));
};

export default createDsTheme;
