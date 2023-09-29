import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'styled-components';
import '@radix-ui/themes/styles.css';

import { store } from './store/store';
import { defaultTheme } from './styles/theme';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <App />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
