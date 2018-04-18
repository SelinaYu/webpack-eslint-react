import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './app.css';
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
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
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>菜单</span></span>}
            >
              <Menu.Item key="3">子菜单一</Menu.Item>
              <Menu.Item key="4">子菜单二</Menu.Item>
              <Menu.Item key="5">子菜单三</Menu.Item>
            </SubMenu>
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
