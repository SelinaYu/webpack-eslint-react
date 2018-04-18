import Home from 'Pages/Home';
import List from 'Pages/List';
const routesConfig = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/list/',
    component: List,
    strict: false,
    exact: false
  }
];
export default routesConfig;
