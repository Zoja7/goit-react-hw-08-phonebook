import React from 'react';
import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Container minWidth="sx" sx={{ overflow: 'hidden' }}>
      <Box sx={{ bgcolor: '#caf2e9', height: '100vh' }}>
        <AppBar />
        <Suspense fallback={null}>
          {' '}
          <Outlet />
        </Suspense>
        <main>{children}</main>
      </Box>
    </Container>
  );
};

export default Layout;
