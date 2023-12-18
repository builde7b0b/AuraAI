import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutSection = () => {
  return (
    <Box sx={{
      padding: '50px',
      backgroundColor: '#f4f4f9', // Soft background color
      color: '#3a3a3c', // Suitable text color
      textAlign: 'center',
    }}>
      <Typography variant="h4" sx={{ marginBottom: '30px', fontWeight: 'bold' }}>
        About Elven AI
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        Elven AI was created with the mission to bring spiritual insight and guidance to the modern world through the power of artificial intelligence. Our journey began with a vision to merge ancient wisdom with cutting-edge technology, offering a unique platform for self-discovery and personal growth.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        At the heart of Elven AI lies a deep respect for spiritual traditions and practices. We harness the knowledge of tarot, astrology, and mindfulness to provide users with thoughtful and personalized experiences. Our chatbot is designed to be a companion on your journey towards inner peace, enlightenment, and self-awareness.
      </Typography>
      <Typography variant="body1">
        Our team comprises passionate experts in AI, spirituality, and design, all working together to create an engaging and transformative experience. We are constantly exploring new ways to expand our services, ensuring that Elven AI remains at the forefront of spiritual exploration in the digital age.
      </Typography>
    </Box>
  );
};

export default AboutSection;
