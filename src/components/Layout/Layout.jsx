import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import UserMenu from 'components/UserMenu/UserMenu';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {' '}
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
        <UserMenu />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
