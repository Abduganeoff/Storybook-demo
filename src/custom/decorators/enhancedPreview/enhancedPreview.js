import React from "react";
import { makeDecorator } from "@storybook/preview-api";
import { useDarkMode } from "storybook-dark-mode";

import { getViewModeFromManager, ViewModes, STYLES } from "./helpers.js";

/**
 * Container for canvas/story view
 */
const CanvasContainer = ({ showBorder, centered, ...props }) => (
  <div
    style={{
      ...(useDarkMode() ? STYLES.checkerboardDark : STYLES.checkerboard),
      ...(!!centered && STYLES.center),
      ...(!!showBorder && STYLES.border),
    }}
    {...props}
  />
);

/**
 * Container for usage/docs view
 */
const DocsContainer = ({ scale, ...props }) => (
  <div
    style={{
      ...(!!scale && STYLES.scale),
    }}
    {...props}
  />
);

const enhancedPreview = makeDecorator({
  name: "enhancedPreview",
  parameterName: "enhancedPreview",
  skipIfNoParametersOrOptions: false,
  wrapper: (Story, context = {}, params = {}) => {
    const {
      parameters: { showBorder, centered, scale },
    } = context;

    if (ViewModes.Docs === getViewModeFromManager()) {
      const docsProps = { scale };

      return (
        <DocsContainer {...docsProps}>
          <Story />
        </DocsContainer>
      );
    }

    const canvasProps = { showBorder, centered };

    return (
      <CanvasContainer {...canvasProps}>
        <Story />
      </CanvasContainer>
    );
  },
});

export default enhancedPreview;
