import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
    <nav>
        <div className="nav-wrapper">
          <NavLink exact to="/" className="brand-logo left">LOGO</NavLink>
          <ul id="nav-mobile" className="right hide-on-small-only">
            <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/todos" activeClassName="active">ToDo</NavLink>
            </li>
            <li>
                <NavLink to="/topics" activeClassName="active">Topics</NavLink>
            </li>
          </ul>
        </div>
    </nav>
    );
}
 
export default NavBar;
