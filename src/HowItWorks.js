import React from 'react';
import {Button, Box, Typography, Step, Stepper, StepLabel, StepContent, Grid, Paper } from '@mui/material';
import HowItWorksImage from './assets/Avatar_animation.gif'; // Replace with your image path
import { useNavigate } from 'react-router';

const HowItWorks = () => {
  const navigate = useNavigate();
  const steps = [
    { label: "Open Elven AI", description: "Click on the chat icon to start." },
    { label: "Choose a Prompt", description: "Select from tarot readings, horoscopes, and more." },
    { label: "Receive Insights", description: "Get personalized responses from Elven AI." },
  ];

  return (
    <Box sx={{ padding: '50px' }}>
      <Typography variant="h4" sx={{ fontFamily: 'Fairies', textAlign: 'center', marginBottom: '30px' }}>
        How It Works
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
      <Stepper orientation="vertical">
        {steps.map((step, index) => (
          <Step  key={step.label} active={true}>
            <StepLabel >{step.label}</StepLabel>
            <StepContent>
              <Typography sx={{fontWeight: 'bold'}}>{step.description}</Typography>
            </StepContent>
            
          </Step>
        ))}
      </Stepper>
      <Button onClick={() => navigate('/chat/ElvenAI')} variant="contained" sx={{backgroundColor:'#9a5636', fontWeight:'bold'}} color="primary">Ask Your First Question FREE!</Button>
      </Grid>
      <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '20px' }}>
            <img src={HowItWorksImage} alt="How It Works" style={{ width: '100%', height: 'auto' }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowItWorks;
