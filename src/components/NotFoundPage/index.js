import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';


class NotFoundPage extends Component {
  render() {
    return (
      <div className="notFoundContainer">
        <div className="bg-404" ></div>
        <div className="goBack">
          <Link to="/" className="backHomeBtn">返回首页</Link>
        </div>
      </div>
    );
  }
}
export default NotFoundPage;
