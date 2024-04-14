import { create } from "@storybook/theming/create";
import { createDsTheme } from "../components/ThemeProvider";

export default create({
  base: "light",
  colorPrimary: "hotpink",
  colorSecondary: "deepskyblue",
  // UI
  appBg: "white",
  appContentBg: "#f8f8ff",
  appBorderColor: "grey",
  appBorderRadius: 4,
  fontBase: '"Roboto", sans-serif',
  fontCode: "monospace",
  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",
  // Toolbar default and active colors
  barTextColor: "rgba(0,0,0,0.65)",
  barSelectedColor: "black",
  barBg: "#F3F4F4",
  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,
  brandTitle: "Relayr Design System",
  brandUrl: "https://design-system.relayr.io/",
  brandImage: "./dslogo.svg",
});

export const darkTheme = createDsTheme({
  mode: "dark",
});

export const lightTheme = createDsTheme({
  mode: "light",
});

export const darkMapStyle = "mapbox://styles/jontore/cj8wvp5lb005t2soa0uy4d8zl";

export const lightMapStyle =
  "mapbox://styles/jontore/ck6j6dubs11721il28v5wq2o7";
