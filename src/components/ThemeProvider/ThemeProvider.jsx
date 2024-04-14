import React, { ComponentType } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
//import DateFnsUtils from "@mui/material/pickers/adapter/date-fns";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Theme } from "@mui/material/styles";
import * as createPalette from "@mui/material/styles/createPalette";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/de";

import relayrTheme from "./relayrTheme.js";

/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 * API:
 *
 * - [ThemeProvider API](https://material-ui.com/api/theme-provider/)
 */

const ThemeProvider = (props) => {
  const { children, theme = relayrTheme, ...rest } = props;
  return (
    <>
      <MuiThemeProvider theme={theme} {...rest}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {typeof children === "function" ? children(theme) : children}
        </LocalizationProvider>
      </MuiThemeProvider>
    </>
  );
};

ThemeProvider.propTypes = {
  /** Render prop or component tree */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** A theme object. You can provide a function to extend the outer theme. */
  theme: PropTypes.shape({}),
};

ThemeProvider.displayName = "ThemeProvider";

export default ThemeProvider;
