// import ThemeProvider from "../src/components/ThemeProvider";
// import { addDecorator, addParameters } from "@storybook/react";
// import { DocsPage, DocsContainer } from "@storybook/blocks";
// import { useDarkMode } from "storybook-dark-mode";
// import ExtendedPreview from "../src/custom/ExtendedPreview";
// import { relayrTheme, testId, enhancedPreview } from "../src/custom/decorators";
// import { useOnThemeChange } from "../src/custom/decorators/relayrTheme";
// import Code from "../src/custom/Code";
// import relayrThemeConfig, {
//   darkTheme,
//   lightTheme,
// } from "../src/custom/relayrThemeConfig";

// const customViewports = {
//   iPadPro: {
//     name: 'iPad pro 12,9"',
//     styles: {
//       width: "1024px",
//       height: "1366px",
//     },
//   },
//   iPadMini: {
//     name: "iPad mini",
//     styles: {
//       width: "768px",
//       height: "1024px",
//     },
//   },
//   iPhonePro: {
//     name: "iPhone 11 Pro",
//     styles: {
//       width: "416px",
//       height: "896px",
//     },
//   },
// };

// // enrich stories with relayr (configured Material) theme provider
// addDecorator(relayrTheme);
// // have one test-id for all stories
// addDecorator(testId);
// // configures canvas and docs preview appearance
// addDecorator(enhancedPreview);

// addParameters({
//   darkMode: {
//     dark: {
//       ...relayrThemeConfig,
//       base: "dark",
//       inputBg: "#242424",
//       brandImage: "./dslogo_inverted.svg",
//       appContentBg: "#1d1d1d",
//       appBg: "black !important",
//       inputTextColor: "white",
//       textColor: "white", //nested menu items
//       textMutedColor: "rgb(152, 152, 152)",
//       barSelectedColor: "white",
//       colorSecondary: "#7ba7ff",
//     },
//     light: {
//       ...relayrThemeConfig,
//     },
//   },
// });

// addParameters({
//   options: {
//     storySort: ([, itemA], [, itemB]) => {
//       const manualOrders = ["components/", "patterns"];

//       const itemAKind = itemA.kind.toLowerCase();
//       const itemBKind = itemB.kind.toLowerCase();

//       // NOTE:
//       // item kind comes from Storybook and always contain full path so it's safer
//       // to compere `manualOrders` item to it rather than in opposite way.
//       const manualItemAIndex = manualOrders.findIndex((item) =>
//         itemAKind.toLowerCase().includes(item.toLowerCase())
//       );
//       const manualItemBIndex = manualOrders.findIndex((item) =>
//         itemBKind.toLowerCase().includes(item.toLowerCase())
//       );

//       // check if compared items are in `manualOrders` and hoist them to top
//       if (~manualItemAIndex && ~manualItemBIndex) {
//         // preserve `manualOrders` array order
//         return manualItemAIndex <= manualItemBIndex ? -1 : 1;
//       } else if (~manualItemAIndex) {
//         return -1;
//       } else if (~manualItemBIndex) {
//         return 1;
//       }

//       // sort regular items by numeric comparison of ids, or don't sort them at all
//       return itemAKind !== itemBKind
//         ? itemA.id.localeCompare(itemB.id, { numeric: true })
//         : 0;
//     },
//   },
// });

// addParameters({
//   docs: {
//     container: function ThemedContainer(props) {
//       useOnThemeChange();

//       const isDarkModeEnabled = useDarkMode();

//       return (
//         <ThemeProvider theme={isDarkModeEnabled ? darkTheme : lightTheme}>
//           <div
//             style={{
//               backgroundColor: isDarkModeEnabled ? "#1d1d1d" : "#ffffff",
//             }}
//           >
//             <DocsContainer {...props} />
//           </div>
//         </ThemeProvider>
//       );
//     },
//     page: DocsPage,
//     components: {
//       Canvas: ExtendedPreview,
//       code: Code,
//     },
//   },
//   viewport: { viewports: customViewports },
// });

// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;

import ThemeProvider from "../src/components/ThemeProvider";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { useDarkMode } from "storybook-dark-mode";
import ExtendedPreview from "../src/custom/ExtendedPreview";
import { relayrTheme, testId, enhancedPreview } from "../src/custom/decorators";
import { useOnThemeChange } from "../src/custom/decorators/relayrTheme";
import Code from "../src/custom/Code";
import relayrThemeConfig, {
  darkTheme,
  lightTheme,
} from "../src/custom/relayrThemeConfig";

export const parameters = {
  darkMode: {
    dark: relayrThemeConfig.dark,
    light: relayrThemeConfig.light,
  },
  options: {
    storySort: {
      order: ["Components", "Patterns"], // Simplified sorting based on the groups
    },
  },
  docs: {
    container: ({ children, ...props }) => {
      useOnThemeChange();
      const isDarkModeEnabled = useDarkMode();
      return (
        <ThemeProvider theme={isDarkModeEnabled ? darkTheme : lightTheme}>
          <DocsContainer {...props}>{children}</DocsContainer>
        </ThemeProvider>
      );
    },
    page: DocsPage,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  viewport: {
    viewports: {
      iPadPro: {
        name: 'iPad Pro 12.9"',
        styles: {
          width: "1024px",
          height: "1366px",
        },
      },
      iPadMini: {
        name: "iPad Mini",
        styles: {
          width: "768px",
          height: "1024px",
        },
      },
      iPhonePro: {
        name: "iPhone 11 Pro",
        styles: {
          width: "416px",
          height: "896px",
        },
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <Story />
    </ThemeProvider>
  ),
  testId,
  enhancedPreview,
];
