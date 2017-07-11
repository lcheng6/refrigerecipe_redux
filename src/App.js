import React, { Component } from 'react';
import { Layout, Menu, Icon, Row } from 'antd';
const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state = {
    current: 'home',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Layout>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          >
          <Menu.Item key="home">
            <Icon type="home" />Refrigerecipe
          </Menu.Item>
          <Menu.Item key="fridge">
            <Icon type="book" />My Fridge
          </Menu.Item>
          <Menu.Item key="recipes">
            <Icon type="schedule" />Recipes
          </Menu.Item>
          <Menu.Item key="cook">
            <Icon type="calculator" />Let's Cook!
          </Menu.Item>
          <Menu.Item key="cart">
            <Icon type="shopping-cart" />Shopping List
          </Menu.Item>
        </Menu>
        <Layout>

        </Layout>
        <Footer>

        </Footer>
      </Layout>
    );
  }
}

export default App;
