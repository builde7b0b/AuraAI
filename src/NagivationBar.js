import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from './logo.svg'; // Import your logo
import {useNavigate} from 'react-router-dom';
import elvenLogo from './assets/ui.png'



const NavigationBar = () => {
    const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  return (
    <AppBar position="sticky" color="default" sx={{ boxShadow: 'none', backgroundColor: 'white' }}>
      <Toolbar>
        <img src={elvenLogo} alt="Elven AI" style={{ height: '40px', marginRight: '20px' }} />
        <Typography onClick={() => navigate('/')} variant="h6" color="inherit"  sx={{ flexGrow: 1, fontFamily: 'Fairies', }}>
          Elven AI
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={menuOpen ? handleMenuClose : handleMenuClick}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
          <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
          <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
          <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
