import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid } from '@mui/material';
import Testimonial1 from './Avatar.png'; // Replace with your image paths

import Man1 from './assets/Man1.jpeg';
import Man2 from './assets/Man2.jpeg';
import Jade from './assets/Jade.jpeg';
import Woman1 from './assets/Woman1.jpeg';




const Testimonials = () => {
  // Array of testimonials
  return (
    <Box sx={{ padding: '50px', backgroundColor: '#e8eaf6' }}>
      <Typography variant="h4" sx={{ fontFamily: 'Fairies', textAlign: 'center', marginBottom: '30px' }}>
        What Our Users Say
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                "Really cool product. I'm excited to see where it goes."
              </Typography>
              <Typography variant="body2" color="#9a5636">
                - Alex West, Software Engineer
              </Typography>
              <Avatar alt="Alex West" src={Man1} sx={{ width: 56, height: 56 }} />
            </CardContent>
          </Card>
        </Grid>
        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                "Elven AI has been a transformative experience..."
              </Typography>
              <Typography variant="body2" color="#9a5636">
                - Jane Whilde, Spiritual Enthusiast
              </Typography>
              <Avatar alt="Jane Doe" src={Jade} sx={{ width: 56, height: 56 }} />
            </CardContent>
          </Card>
        </Grid>
        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                "Our Favorite Product of 2023!"
              </Typography>
              <Typography variant="body2" color="#9a5636">
                - Darius & Kenzie, Tech Reviewers
              </Typography>
              <Avatar alt="Kenzie" src="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400" sx={{ width: 56, height: 56 }} />
            </CardContent>
          </Card>
        </Grid>
        {/* Repeat for other testimonials as needed */}
      </Grid>
    </Box>
  );
};

export default Testimonials;
