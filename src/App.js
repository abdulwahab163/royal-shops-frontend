import React, { useEffect } from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify'
import { authConstants } from './redux/actionTypes/index';
import { setUserAndToken } from './redux/actions/auth.actions'

const App = () => {
  const dispatch = useDispatch()
  const routing = useRoutes(routes());

  useEffect(() => {
    const token = localStorage.getItem(authConstants.AUTH_TOKEN)
    if (token) {
      dispatch(setUserAndToken(token, localStorage.getItem(authConstants.USER)))
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        limit={10}
        autoClose={5000}
        newestOnTop={true}
        closeOnClick
        rtl={false}
      />
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
