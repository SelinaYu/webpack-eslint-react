
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import App from './pages/App/';
import rootReducer from './reducers';


const store = createStore(rootReducer);

render(
  <LocaleProvider locale={zh_CN} >
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>,
  document.getElementById('app')
);
