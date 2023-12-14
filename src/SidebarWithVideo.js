import React from 'react';
import { Box } from '@mui/material';
import SidebarBackgroundVid from './SidebarAnim.mp4';
import SidebarBgVid from './SideBarAnim2.mp4';
const SidebarBackgroundVideo = ''; // Replace with the path to your MP4 animation

const SidebarWithVideo = () => {
  return (
    <Box sx={{
      width: '15vw',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
    }}>
      <video autoPlay loop muted style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensures the video covers the sidebar area
      }}>
        <source src={SidebarBgVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Sidebar content goes here */}
    </Box>
  );
};

export default SidebarWithVideo;
