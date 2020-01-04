import React, { Fragment } from 'react';
import { withRouter, NavLink } from "react-router-dom";
import { Menu } from 'antd';

const NavBar = ({location}) => {
    return (
        <Fragment>
            <div className="logo" style={LogoStyle}/>
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                selectedKeys={location.pathname}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="home">
                    <NavLink exact to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item key="posts">
                    <NavLink to="/posts">Posts</NavLink>
                </Menu.Item>
                <Menu.Item key="todos">
                    <NavLink to="/todos">Todos</NavLink>
                </Menu.Item>
                <Menu.Item key="topics">
                    <NavLink to="/topics">Topics</NavLink>
                </Menu.Item>
                <Menu.Item key="login">
                    <NavLink to="/login">Login</NavLink>
                </Menu.Item>
            </Menu>
        </Fragment>
    );
}

const LogoStyle = {
    width: 120,
    height: 31,
    background: "rgba(255, 255, 255, 0.2)",
    margin: "16px 24px 16px 0",
    float: "left",
}
export default withRouter(NavBar);
