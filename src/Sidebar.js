import React from 'react';
import { styled } from '@mui/system';
import { Box, Button, AppBar, Toolbar, Typography } from '@mui/material';
import SidebarImg from './sidebar.png';
import button1 from './Button1-removebg-preview.png';
import button2 from './Button2-removebg-preview.png';
import button3 from './Button3-removebg-preview.png';
import SidebarVid from './SidebarAnim.mp4'

// Sample styled button using Material-UI's system
const SidebarButton = styled('div')(({ theme }) => ({
  height: '50px', // Adjust based on actual image size
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    // Example hover effect
    opacity: 0.8,
  },
}));

const Sidebar = () => {
  // You'll replace 'buttonBg.png' with your actual button images
  const buttons = [
    { id: 'home', bgImage: button1 },
    { id: 'profile', bgImage: button2 },
    { id: 'share', bgImage: button3 },
    // Add all buttons accordingly
  ];

  return (
    <Box sx={{ 
        // backgroundImage: `url(${SidebarVid})`,
        backgroundSize: 'cover', // or 'contain' if you want to see the whole image without cropping
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', // This will center the background image within the div
        width: '15%',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0
      }}>
    <div style={{
      width: '80px', // Sidebar width
    //   background: 'black', // Sidebar background color
      padding: '10px',
      boxSizing: 'border-box',
    
    }}>
      {buttons.map(button => (
        <SidebarButton
          key={button.id}
          style={{ backgroundImage: `url(${button.bgImage})` }}
          // Add onClick handler if needed
        >
          {/* Additional content can go here */}
        </SidebarButton>
      ))}
    </div>
    </Box>
  );
};

export default Sidebar;
