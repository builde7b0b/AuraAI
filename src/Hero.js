import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BackgroundImage from './ChatBot.png'; // Replace with your image path
import { useNavigate } from 'react-router';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        // backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        color: 'white',
        backgroundColor: 'black',
        textAlign: 'center',
        padding: '100px 20px',
      }}
    >
      <Typography  variant="h2" sx={{ fontWeight: 'bold', fontFamily: 'Fairies', marginBottom: '20px', backgroundColor: 'black', }}>
        Explore Your Spiritual Journey with Elven AI
      </Typography>
      <Button onClick={() => navigate('/chat/ElvenAI')} variant="contained" color="primary" sx={{ padding: '10px 20px', fontSize: '1.2rem', backgroundColor:'#9a5636', fontWeight: 'bold' }}>
        Start Your Journey
      </Button>
    </Box>
  );
};

export default HeroSection;
