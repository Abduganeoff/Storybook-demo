import React from "react";
import Prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import camelCase from "lodash-es/camelCase";
import upperFirst from "lodash-es/upperFirst";
import { toId, storyNameFromExport } from "@storybook/csf";
import { visit } from "ast-types";

const getComponentNameFromId = (id) => {
  const categories = [
    "get-started",
    "styles",
    "components",
    "patterns",
    "guidelines-layout",
    "base-constituents",
  ];
  const prefix = `^(?:${categories.join("|")})?-{0,2}`;
  const suffix = `--.*$`;
  const componentRegExp = new RegExp(`${prefix}(?<component>.+?)${suffix}`);

  return upperFirst(camelCase(id.replace(componentRegExp, `$<component>`)));
};

const getComponentCodeAsJSXFragment = (code, componentName) => {
  return Prettier.format(code, {
    semi: false,
    plugins: [parserBabel],
    parser(text, { babel }) {
      const ast = babel(text);
      const componentNodes = [];

      visit(ast, {
        visitJSXElement(path) {
          if (path?.node?.openingElement?.name?.name === componentName) {
            componentNodes.push(path.node);
          }

          this.traverse(path);
        },
      });

      return {
        type: "ExpressionStatement",
        expression: {
          type: "JSXFragment",
          children: componentNodes,
        },
      };
    },
  });
};

/**
 * Fork of https://github.com/storybookjs/storybook/blob/aab317f2590f501ec8383935634a111182549735/addons/docs/src/blocks/Source.tsx#L37-L54
 */
export const getComponentCode = (source, component) => {
  const componentCode = getComponentCodeAsJSXFragment(source, component);
  // NOTE: fixes JSXFragment indentation spacing
  const startTabsPad = "^\\s\\s";

  return componentCode.replace(new RegExp(startTabsPad, "gm"), "");
};

/**
 * Fork of https://github.com/storybookjs/storybook/blob/aab317f2590f501ec8383935634a111182549735/addons/docs/src/blocks/Source.tsx#L56-L82
 */
export const deriveSourceProps = (props, docsContext, sourceContext) => {
  const CURRENT_SELECTION = ".";
  const SOURCE_UNAVAILABLE = "Oh no! The source is not available.";

  const getSourceCodeFromId = (id) => {
    const targetComponent =
      props?.targetComponent || getComponentNameFromId(id);
    const currentStory = docsContext?.storyStore?.fromId(id) || {};
    const storyParameters = currentStory?.parameters || {};
    const { mdxSource } = storyParameters;
    const storySource = storyParameters?.storySource?.source;
    const argsSource = sourceContext?.sources?.[id];

    switch (true) {
      case Boolean(mdxSource):
        return mdxSource;

      case Boolean(argsSource):
        return getComponentCode(argsSource, targetComponent);

      case Boolean(storySource):
        return getComponentCode(storySource, targetComponent);

      default:
        return "";
    }
  };

  const { id: currentId } = docsContext;
  const targetId = props.id === CURRENT_SELECTION ? currentId : props.id;
  const targetIds = props.ids || [targetId];
  const code = props.code || targetIds.map(getSourceCodeFromId).join("\n\n");

  return code
    ? {
        code,
        language: props.language || "jsx",
        dark: props.dark || true,
      }
    : { error: SOURCE_UNAVAILABLE };
};

/**
 * Fork ofhttps://github.com/storybookjs/storybook/blob/aab317f2590f501ec8383935634a111182549735/addons/docs/src/blocks/Preview.tsx#L36-L47
 */
export const getStoryIdsFromChildren = (children, docsContext) => {
  const { mdxStoryNameToKey, mdxComponentMeta } = docsContext;
  const childrenWithIdsOrName = React.Children.toArray(children).filter(
    ({ props }) => props?.id || props?.name
  );

  return childrenWithIdsOrName.map(
    ({ props }) =>
      props?.id ||
      toId(
        mdxComponentMeta?.id || mdxComponentMeta?.title,
        storyNameFromExport(mdxStoryNameToKey[props?.name])
      )
  );
};

export const deriveSimpleCodeProps = (props, docsContext, sourceContext) =>
  deriveSourceProps(
    {
      ...props,
      ids: getStoryIdsFromChildren(props.children, docsContext),
    },
    docsContext,
    sourceContext
  );

export const deriveFullCodeProps = (props) => ({
  dark: true,
  code: props.example,
});

export const getNextCodePreview = (current, availablePreviews) => {
  const nextIndex = availablePreviews.indexOf(current) + 1;

  return nextIndex >= availablePreviews.length
    ? availablePreviews[0]
    : availablePreviews[nextIndex];
};
