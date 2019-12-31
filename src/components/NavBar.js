import React from 'react';
import { NavLink } from "react-router-dom";

import { Layout, Menu } from 'antd';
const { Header } = Layout;

const NavBar = () => {
    return ( 
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" style={LogoStyle}/>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            style={{ lineHeight: '64px' }}
        >
            <Menu.Item key="home">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="todos">
                <NavLink to="/todos" activeClassName="active">ToDo</NavLink>
            </Menu.Item>
            <Menu.Item key="about">
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </Menu.Item>
            <Menu.Item key="topics">
              <NavLink to="/topics" activeClassName="active">Topics</NavLink>
            </Menu.Item>
        </Menu>
    </Header>
    );
}

const LogoStyle = {
    width: 120,
    height: 31,
    background: "rgba(255, 255, 255, 0.2)",
    margin: "16px 24px 16px 0",
    float: "left",
}
export default NavBar;
