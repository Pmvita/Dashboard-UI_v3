import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Box, Container } from '@mui/material';

const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Container maxWidth="lg" sx={{ flexGrow: 1, py: 3 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout; 