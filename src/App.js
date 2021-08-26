import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify'

const App = () => {
  const routing = useRoutes(routes());

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        limit={10}
        autoClose={5000}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
