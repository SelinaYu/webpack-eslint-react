
import React from 'react';
import { render } from 'react-dom';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import App from './pages/App/';
// import mockData from './mock/mockData';


render(
  <LocaleProvider locale={zh_CN}>
    <App />
  </LocaleProvider>,
  document.getElementById('app')
);
