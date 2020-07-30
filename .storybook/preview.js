// Storybook specific imports
import { addParameters } from '@storybook/vue';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

// Extra options for storybook and its addons
addParameters({
  docs: {
    inlineStories: true,
    container: DocsContainer,
    page: DocsPage,
  },
});
