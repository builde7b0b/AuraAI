import React from 'react';
import { Box } from '@mui/material';
import ChatAreaBackgroundVideo from './chatbox.mp4';


// const ChatAreaBackgroundVideo = '/path/to/your/chat-area-video.mp4'; // Replace with the path to your MP4 animation

const ChatAreaWithVideo = ({ children }) => {
  return (
    <Box sx={{
      height: '40vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
    }}>
      {/* Video Background */}
      <video autoPlay loop muted style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'bottom',




      }}>
        <source src={ChatAreaBackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Chat Area Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children} {/* This is where your input field and other content will go */}
      </div>
    </Box>
  );
};

export default ChatAreaWithVideo;
