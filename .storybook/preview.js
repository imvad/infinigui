import { muiTheme } from 'storybook-addon-material-ui'
import customTheme from '../src/lib/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
	muiTheme([customTheme])
];