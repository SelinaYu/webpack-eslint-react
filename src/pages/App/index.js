import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './app.css';
import { getData } from 'actions';
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  componentDidMount = () => {
    // const { dispatch } = this.props;
    // dispatch(getData());
    const { getData } = this.props;
    getData();
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
              <Icon type="pie-chart" />
              <span>菜单一</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>菜单二</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>菜单三</span></span>}
            >
              <Menu.Item key="3">子菜单一</Menu.Item>
              <Menu.Item key="4">子菜单二</Menu.Item>
              <Menu.Item key="5">子菜单三</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ minHeight: '100vh', padding: '20px' }}>
          <Content>
            <div style={{ background: '#fff', minHeight: '90vh', padding: '20px' }}>
              这里是内容
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', fontSize: '16px' }}>
            webpack-eslint-react &nbsp; ©2018 Created by SelinaYu
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});
App.propTypes = {
  getData: PropTypes.func.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
