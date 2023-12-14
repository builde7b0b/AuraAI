import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import AiAvatarImg from './Avatar.png';
import AiAvatarAnimation from './SidebarAnim.mp4';


const AiAvatar = ({ children, response }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row', // Stack the avatar and the output box horizontally
      alignItems: 'center',
      height: '60vh',
    }}>
      {/* AI Avatar Video aligned to the left */}
      <div style={{
        maxWidth: '50%', // Adjust the size as needed
        maxHeight: '100%',

        position: 'relative', // For absolute positioning of the video
        flexShrink: 0, // Prevents the video container from shrinking
      }}>
        <video autoPlay loop muted style={{
          width: '50%',
          height: '100%',
          objectFit: 'cover', // Ensures the video covers the container area
          
        }}>
          <source src={AiAvatarAnimation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Output Box for AI responses */}
      <Box sx={{
        maxWidth: '40%', // Adjust the size as needed
        maxHeight: '100%',
        // padding: theme.spacing(2),
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly transparent white background
        // marginLeft: theme.spacing(2), // Adds space between the avatar and the output box
        borderRadius: theme.shape.borderRadius, // Optional: rounds the corners of the box
        overflowY: 'auto', // Allows scrolling if content is too long
        flexShrink: 0, // Prevents the output box from shrinking
      }}>
        <Typography variant="body1" component="div" sx={{ 
  color: 'text.primary',
  overflowWrap: 'break-word',
  maxWidth: '100%',
  padding: '8px',
  fontSize: '1rem',
  '@media (max-width:600px)': {
    fontSize: '0.875rem',
  }
}}>
  {response && <p>{response.response}</p>}
  {children}
  {!response && <p>Ask Me Anything...</p>} {/* This line is modified */}
</Typography>



      </Box>
    </Box>
  );
};

export default AiAvatar;
