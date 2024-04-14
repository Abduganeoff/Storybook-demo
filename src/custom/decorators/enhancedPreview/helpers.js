/**
 * View modes enum
 */
export const ViewModes = {
  Story: 'story',
  Docs: 'docs',
};

/**
 * Gets viewMode from manager (top window) instead of preview iframe due to Storybook iframe URI unpredictability
 */
export const getViewModeFromManager = (fallbackViewMode = ViewModes.Story) => {
  const insideManager = window.location !== window.parent.location;

  if (!insideManager) {
    return fallbackViewMode;
  }

  const { searchParams } = new URL(window.parent.location);
  const pathUri = searchParams.get('path');
  const [, viewMode] = pathUri.match(/\/(.+?)\//); // viewMode string is inside captured group

  return viewMode;
};

/**
 * Styles applied to containers
 */
export const STYLES = {
  checkerboard: {
    backgroundColor: '#FFF',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px',
    backgroundImage:
      'linear-gradient(45deg, #F2F2F2 25%, transparent 25%, transparent 75%, #F2F2F2 75%, #F2F2F2),linear-gradient(45deg, #F2F2F2 25%, transparent 25%, transparent 75%, #F2F2F2 75%, #F2F2F2)',
  },
  checkerboardDark: {
    backgroundColor: 'rgba(125, 125, 125, 0.9)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px',
    backgroundImage:
      'linear-gradient(45deg,rgb(96, 96, 96) 25%,transparent 25%, transparent 75%, rgb(96, 96, 96) 75%, rgb(96, 96, 96)),\n' +
      '  linear-gradient(45deg,rgb(96, 96,96) 25%, transparent 25%, transparent 75%, rgb(96, 96, 96) 75%, rgb(96, 96, 96))',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  border: { border: '1px dotted black' },
  // In version 6.0.0-beta-9 Storybook introduced breaking changes to the story layout.
  // One of them was removing wrapper with `transform: 'scale(1)'` which was required to properly fit
  // components with style `position: fixed` inside of a story. Detail can be found here:
  // https://github.com/storybookjs/storybook/issues/10789
  scale: {
    transform: 'scale(1)',
  },
};
