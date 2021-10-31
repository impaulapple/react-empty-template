import DashboardIcon from '@material-ui/icons/Dashboard';
import EjectIcon from '@material-ui/icons/Eject';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import React from 'react';

const TestPage = React.lazy(() => import('./pages/TestPage'));
const Test2Page = React.lazy(() => import('./pages/Test2Page'));
const Test3Page = React.lazy(() => import('./pages/Test3Page'));

const routes = [
  {
    path: '/Test1', name: 'Test1', component: TestPage, icon: <EjectIcon fontSize='small' />
  },
  {
    path: '/Test2', name: 'Test2', component: Test2Page, icon: <MenuBookIcon fontSize='small' />
  },
  {
    path: '/Test3', name: 'Test3', component: Test3Page, protacted: true, icon: <DashboardIcon fontSize='small' />
  }
];

export default routes;