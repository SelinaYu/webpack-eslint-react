import App from 'Pages/App';
import Home from 'Pages/Home';
const routesConfig = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/home',
        component: Home
      }
    ]
  },
  {
    path: '/home',
    component: Home
  }
];
export default routesConfig;
