import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './routes/Router';
import store from './store';
import GlobalStyle from './styles/Global';
import theme from './styles/theme';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
