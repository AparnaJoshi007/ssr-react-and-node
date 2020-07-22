import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/page1">Page1</NavLink>
        </li>
        <li>
          <NavLink to="/page2">Page2</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Nav;