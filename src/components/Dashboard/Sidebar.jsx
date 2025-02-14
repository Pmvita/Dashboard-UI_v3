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
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {
  const navigation = useNavigation();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, screen: 'Dashboard' },
    { text: 'Users', icon: <UsersIcon />, screen: 'Users' },
    { text: 'Products', icon: <ProductsIcon />, screen: 'Products' },
    { text: 'Reports', icon: <ReportsIcon />, screen: 'Reports' },
    { text: 'Settings', icon: <SettingsIcon />, screen: 'Settings' },
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
            onPress={() => navigation.navigate(item.screen)}
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