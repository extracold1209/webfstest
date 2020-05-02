import React from 'react';
import { Provider } from 'react-redux';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import store from '../src/react/store';
import theme from '../src/react/themes/default';

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
});

addDecorator((storyFn) =>
       <Provider store={store}>
           <ThemeProvider theme={theme}>
               <CssBaseline />
               {storyFn()}
           </ThemeProvider>
       </Provider>
)
