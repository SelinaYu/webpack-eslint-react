
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import App from './pages/App/';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
}
const middleware = [ thunk ];
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
// other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

render(
  <LocaleProvider locale={zh_CN} >
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>,
  document.getElementById('app')
);
