import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/selectors';

const Layout = ({ children }) => {
  const authenticated = useSelector(selectAuthenticated);
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
        {authenticated ? (
          <>
            <NavLink
              className={({ isActive }) =>
                `${css.headerLink} ${isActive ? css.active : ''}`
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            {' '}
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
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
