import React, { Component } from 'react';
import { Pagination } from 'antd';
class App extends Component {
  render() {
    return <Pagination defaultCurrent={1} total={50} showSizeChanger />;
  }
}
export default App;
