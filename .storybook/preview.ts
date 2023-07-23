import { setup, Preview } from '@storybook/vue3';
import "../assets/css/theme.css";
import { withThemeByClassName } from '@storybook/addon-styling';
import { themes } from '@storybook/theming';
import { Icon } from '@iconify/vue';

setup((app) => {
  app.component('Icon', Icon)
})

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div style="padding: 5px; width: 100vw; height: 100vh; background-color: var(--md-sys-color-surface-container);"><story /></div>',
  }),
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
];

const CustomViewports = {
  // Device resolutions can be found here: https://www.webmobilefirst.com/en/devices/
  // Related statistics can be found here: https://gs.statcounter.com/screen-resolution-stats/all/germany
  reIPhoneSE: {
    name: 'iPhone SE',
    styles: {
      width: '375px',
      height: '667px',
    },
    type: 'mobile',
  },
  reIPhone12: {
    name: 'iPhone 13 Pro',
    styles: {
      width: '390px',
      height: '844px',
    },
    type: 'mobile',
  },
  reIPhone12Max: {
    name: 'iPhone 13 Pro Max',
    styles: {
      width: '428px',
      height: '926px',
    },
    type: 'mobile',
  },
  reLargeMobile: {
    name: 'Large Mobile Device',
    styles: {
      width: '480px',
      height: '848px',
    },
    type: 'mobile',
  },
  reMedium: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  reExtraLarge: {
    name: 'Small Desktop',
    styles: {
      width: '1280px',
      height: '720px',
    },
    type: 'desktop',
  },
};

const preview: Preview = {
  parameters: {
    viewport: { viewports: CustomViewports },
    docs: {
      theme: themes.dark,
    },
    layout: 'fullscreen',
    panelPosition: 'right',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
