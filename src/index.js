
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { LocaleProvider } from 'antd';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import App from 'Pages/App/';
import NotFoundPage from 'Components/NotFoundPage';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import routesConfig from './routes';

let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
}
const history = createHistory();
const middleware = [ thunk, routerMiddleware(history) ];
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
// other store enhancers if any
);

const store = createStore(combineReducers({ ...rootReducer, router: routerReducer }), enhancer);
const RouteWithSubRoutes = route => {
  const { component: Component, ...rest } = route;
  return (
    <Route
      exact={true}
      {...rest}
      render={props => (
        // pass the sub-routes down to keep nesting
        <Component {...props} />
      )}
    />
  );
};
render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <LocaleProvider locale={zh_CN} >
        <App>
          <Switch>
            {routesConfig.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            {/* {routesConfig.map((route, i) => <Route exact={true} key={i} path={route.path} component={route.component} />)} */}
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </App>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
