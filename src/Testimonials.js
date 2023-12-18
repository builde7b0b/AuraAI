import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import Testimonial1 from './Avatar.png'; // Replace with your image paths

const Testimonials = () => {
  // Array of testimonials
  return (
    <Box sx={{ padding: '50px', backgroundColor: '#e8eaf6' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px' }}>
        What Our Users Say
      </Typography>
      <Card sx={{ maxWidth: 345, margin: 'auto' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            "Elven AI has been a transformative experience..."
          </Typography>
          <Typography variant="body2" color="text.secondary">
            - Jane Doe, Spiritual Enthusiast
          </Typography>
          <Avatar alt="Jane Doe" src={Testimonial1} sx={{ width: 56, height: 56 }} />
        </CardContent>
      </Card>
      {/* Repeat for other testimonials */}
    </Box>
  );
};

export default Testimonials;
