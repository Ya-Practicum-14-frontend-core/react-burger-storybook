import { addons } from '@storybook/addons';
import platformTheme from './platform.theme';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: platformTheme,
  docs: {
    theme: themes.dark,
  },
});
