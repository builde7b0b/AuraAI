import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { Box, Button, AppBar, Toolbar, Typography } from '@mui/material';
// import AiAvatarPlaceholder from 'https://files.oaiusercontent.com/file-Uuszo3yRv5Q4ReS2qxhA47g3?se=2023-12-05T15%3A06%3A09Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Ddb478427-798a-438b-b32c-d94f4ec3b23d.webp&sig=Z7%2BSztkcYLMcMkO6JZ%2BXqajPeIPYvWdeJ9T0wgDT4vw%3D'; // Placeholder image

import Sidebar from './Sidebar';
import HeaderBG from './HeaderBG.png'
import ChatArea from './ChatArea';
import Avatar from './Avatar.png';
import AiAvatar from './AIAvatar';
import button1 from './Button1-removebg-preview.png';
import SidebarWithVideo from './SidebarWithVideo';
import ChatAreaWithVideo from './ChatAreaWithVideo';
import ChatComponent from './ChatComponent';
import ChatbotSelectionPage from './ChatbotSelectionPage';
import OnboardingModal from './OnboardingModal';
// const AiAvatar = () => (
//   <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
//     <img src={Avatar} alt="AI Avatar" style={{ maxWidth: '100%', maxHeight: '100%', float: 'left' }} />
//   </Box>
// );

const ChatButton = () => {
  const buttonImage = '/path/to/button-image.png'; // Replace with the path to your button image

  return (
    <div
      style={{
        backgroundImage: `url(${button1})`,
        backgroundSize: 'cover',
        width: '60px', // Set the width of your button
        height: '50px', // Set the height of your button
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '8px', // Material-UI's theme.spacing(2) equivalent
        color: 'white', // Text color
        // Add any additional styling you need here
        cursor: 'pointer',
      '&:hover': {
        // Example hover effect
        opacity: 0.8,
        marginBottom: '10px',
      },
      }}
      onClick={() => {
        // Add your click event logic here
      }}
    >
      
    </div>
  );
};

// const SideBar = () => (
//   <Box sx={{ backgroundColor: 'lightgreen', width: '15%', height: '100vh', position: 'fixed', left: 0, top: 0 }}>
//     {/* Placeholder for Sidebar */}
//     <Typography>Sidebar Content</Typography>
//   </Box>
// );

// const ChatArea = () => (
//   <Box sx={{ backgroundColor: 'lightcoral', height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//     {/* Placeholder for Chat Area */}
//     <Typography>Chat Area Here</Typography>
//   </Box>
// );

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-chatbot" element={<ChatbotSelectionPage />} />
        
        <Route path="/chat/PendulumProphet" element={<Home />} />

        <Route path="/chat/CelestialScribe" element={<Home />} />
      </Routes>
      <OnboardingModal />
    </Router>
  );
}
export default App;
