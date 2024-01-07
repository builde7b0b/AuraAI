import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import SidebarWithVideo from './SidebarWithVideo';
import ChatArea from './ChatArea';
import AiAvatar from './AIAvatar';
import HeaderBG from './HeaderBG.png';
import OnboardingModal from './OnboardingModal';
import NavigationBar from './NagivationBar';

const Home = () => {
  const [response, setResponse] = useState('');

  return (
    <><NavigationBar /><Box sx={{ backgroundColor: 'black', flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundImage: `url(${HeaderBG})` }}>
          <Toolbar sx={{ backgroundImage: `url(${HeaderBG})` }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Spiritual Chatbot */}
          </Typography>
        </Toolbar>
      </AppBar>
      <SidebarWithVideo />
      <Box sx={{ marginLeft: '15%' }}>
        <AiAvatar response={response} />
        <ChatArea setResponse={setResponse} />

      </Box>
      <OnboardingModal />
    </Box></>
    
  );
};

export default Home;
