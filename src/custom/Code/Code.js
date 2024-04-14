import React from "react";
import PropTypes from "prop-types";
//import { Source } from "@storybook/components/dist/esm/blocks/Source";
import { Source } from "@storybook/blocks";
import { Box } from "@mui/material";
import { useDarkMode } from "storybook-dark-mode";

const getBgColor = (className, isDarkModeEnabled) => {
  if (className) {
    return "inherit";
  }
  return isDarkModeEnabled ? "grey.800" : "grey.200";
};

const Code = ({
  component = "div",
  display = "inline",
  language = "jsx",
  className,
  children,
}) => {
  const isDarkModeEnabled = useDarkMode();
  const boxProps = {
    ...(display === "inline" && {
      component: "span",
      display: "inline",
      bgcolor: getBgColor(className, isDarkModeEnabled),
      fontStyle: className ? "inherit" : "italic",
      pr: 3,
      pl: 3,
    }),
  };
  return (
    <Box component={component} {...boxProps}>
      {display === "inline" && !className && children}
      {(display === "block" || className) && (
        <Source code={children} language={language} dark />
      )}
    </Box>
  );
};

Code.propTypes = {
  component: PropTypes.string,
  display: PropTypes.oneOf(["inline", "block"]),
  language: PropTypes.string,
  children: PropTypes.any,
};

export default Code;
