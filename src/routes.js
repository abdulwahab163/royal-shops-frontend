import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/CustomerList';
import Dashboard from 'src/pages/Dashboard';
import Orders from 'src/pages/Orders';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Settings from 'src/pages/Settings';


const user = localStorage.getItem('user');
const routes = [
  {
    path: 'app',
    element: user ? <DashboardLayout /> : <MainLayout />,
    children: [
      { path: 'account', element: user ? <Account /> : <Login /> },
      { path: 'customers', element: user ? <CustomerList /> : <Login /> },
      { path: 'dashboard', element: user ? <Dashboard /> : < Login /> },
      { path: 'orders', element: user ? <Orders /> : <Login /> },
      { path: 'products', element: user ? <ProductList /> : <Login /> },
      { path: 'settings', element: user ? <Settings /> : <Login /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
