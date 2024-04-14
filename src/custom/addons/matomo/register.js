/* eslint-disable */
import { addons } from "@storybook/addons";
import { STORY_CHANGED } from "@storybook/core-events";
import MatomoTracker from "@datapunt/matomo-tracker-js";

const MATOMO_SITE_ID = {
  "design-system.relayr.io": 6,
  "design-system.dev.az.relayr.io": 4,
  "design-system.rlr-eu-stg.relayr.io": 5,
};

/** Allows to track users visits*/
addons.register("MatomoAddon", (api) => {
  const matomoSiteId = MATOMO_SITE_ID[document.domain];
  const matomoUrlBase = "https://relayr.matomo.cloud/";

  const tracker = matomoSiteId
    ? new MatomoTracker({
        urlBase: matomoUrlBase,
        siteId: matomoSiteId,
      })
    : null;

  api.on(STORY_CHANGED, () => {
    if (tracker) {
      tracker.trackPageView();
    }
  });
});
