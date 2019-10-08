import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
//const Prueba = React.lazy(() => import('./views/'))

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
];

export default routes;
