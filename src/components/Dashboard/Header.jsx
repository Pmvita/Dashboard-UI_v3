import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Box,
  Avatar,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'white', color: 'black', boxShadow: 1 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome, Admin
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar sx={{ bgcolor: '#1a237e' }}>A</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 