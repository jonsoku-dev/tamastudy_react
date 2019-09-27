import React from 'react';
import GlobalStyles from '../Styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../Styles/Theme';
import Router from './Router';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};

export default App;
