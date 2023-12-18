import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
// import TarotIcon from './icons/TarotIcon'; // Import your custom icons
// import HoroscopeIcon from './icons/HoroscopeIcon';
// import MindfulnessIcon from './icons/MindfulnessIcon';
import AutoStoriesIcon from '@mui/icons-material/AutoStories'; // For Tarot readings
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'; // For Horoscope predictions
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'; // For Mindfulness advice
import SpaIcon from '@mui/icons-material/Spa'; // For Spiritual Healing
import InsightsIcon from '@mui/icons-material/Insights'; // For Insightful Analysis


const FeaturesOverview = () => {
  return (
    <Box sx={{ padding: '50px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px' }}>
        Why Choose Elven AI?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Feature 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <CardMedia component={AutoStoriesIcon} sx={{ fontSize: '80px' }} />
            <CardContent>
              <Typography variant="h6">Tarot Readings</Typography>
              <Typography variant="body1">Experience personalized tarot readings and gain insights into your life.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <CardMedia component={SpaIcon} sx={{ fontSize: '80px', color: 'green' }} />
            <CardContent>
              <Typography variant="h6">Spiritual Healing</Typography>
              <Typography variant="body1">Engage in sessions promoting inner peace and spiritual wellness.</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <CardMedia component={InsightsIcon} sx={{ fontSize: '80px', color: 'purple' }} />
            <CardContent>
              <Typography variant="h6">Insightful Analysis</Typography>
              <Typography variant="body1">Gain deep insights into your personal and spiritual growth.</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Repeat for other features */}
      </Grid>
    </Box>
  );
};

export default FeaturesOverview;
