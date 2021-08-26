import React from 'react'
import { useSelector } from 'react-redux';

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

function routing() {
  const token = useSelector(state => state.auth.user)

  const routes = [
    {
      path: 'app',
      element: token ? <DashboardLayout /> : <MainLayout />,
      children: [
        { path: 'account', element: token ? <Account /> : <Login /> },
        { path: 'customers', element: token ? <CustomerList /> : <Login /> },
        { path: 'dashboard', element: token ? <Dashboard /> : < Login /> },
        { path: 'orders', element: token ? <Orders /> : <Login /> },
        { path: 'products', element: token ? <ProductList /> : <Login /> },
        { path: 'settings', element: token ? <Settings /> : <Login /> },
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
  return routes

}

export default routing