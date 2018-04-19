import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './app.css';
const { Content, Footer, Sider } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="pie-chart" />
                <span>首页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/list">
                <Icon type="desktop" />
                <span>列表页</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ minHeight: '100vh', padding: '20px' }}>
          <Content>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center', fontSize: '16px' }}>
            webpack-eslint-react &nbsp; ©2018 Created by SelinaYu
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
