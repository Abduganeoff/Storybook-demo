import React, { useEffect } from "react";
import { useDarkMode } from "storybook-dark-mode";
import ThemeProvider from "../../components/ThemeProvider";

import { darkTheme, lightTheme } from "../relayrThemeConfig";

export const useOnThemeChange = () => {
  const darkClassName = "dark";
  const currentMode = useDarkMode() ? "dark" : "light";

  useEffect(() => {
    const el = document.getElementsByClassName("sb-show-main")[0];

    el?.classList?.toggle(darkClassName, currentMode === darkClassName);

    return () => el.classList.remove(darkClassName);
  }, [currentMode]);
};

const RelayrTheme = (Story) => {
  useOnThemeChange();

  return (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <Story />
    </ThemeProvider>
  );
};

export default RelayrTheme;
