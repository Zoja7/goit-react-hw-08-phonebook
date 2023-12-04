import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/selectors';
import css from './AppBar.module.css'

const AppBar = () => {
  const authenticated = useSelector(selectAuthenticated);
  return (
    <header className={css.header}>
      <Navigation />
      {authenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
