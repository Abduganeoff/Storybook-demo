/* eslint-disable */
import { addons } from "@storybook/addons";
import { STORY_RENDERED, DOCS_RENDERED } from "@storybook/core-events";

/**
 * Updates page title on another event loop tick
 */
const updatePageTitle = ((timer) => (title) => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    document.title = title;
  });
})();

/**
 * Sets page title
 */
const setTitle = ({ kind } = {}) =>
  updatePageTitle(`Relayr Storybook${kind ? `- ${kind}` : ""}`);

/** Allows to control Storybook document title*/
addons.register("TitleAddon", (api) => {
  api.on(STORY_RENDERED, () => setTitle(api.getCurrentStoryData()));
  api.on(DOCS_RENDERED, () => setTitle(api.getCurrentStoryData()));
});
