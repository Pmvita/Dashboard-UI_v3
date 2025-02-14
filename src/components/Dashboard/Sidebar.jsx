import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  ShoppingCart as ProductsIcon,
  Assessment as ReportsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Users', icon: <UsersIcon />, path: '/dashboard/users' },
    { text: 'Products', icon: <ProductsIcon />, path: '/dashboard/products' },
    { text: 'Reports', icon: <ReportsIcon />, path: '/dashboard/reports' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/dashboard/settings' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#1a237e',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          Admin Panel
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar; 