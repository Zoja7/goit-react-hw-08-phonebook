import { CONTACTS_ROUTE } from 'constants/routes';

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/selectors';

const RestrictedRoute = ({ children, navigateTo = CONTACTS_ROUTE }) => {
  const authenticated = useSelector(selectAuthenticated);
  return authenticated ? <Navigate to={navigateTo} replace /> : children;
};

export default RestrictedRoute;

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */
