import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
    borderRadius: '15px',
    border: '1px solid #7265A6', // Subtle purple border
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    padding: theme.spacing(2),
  },
  '& .MuiDialogTitle-root': {
    color: '#6A5ACD', // Mystical purple
    fontWeight: 'bold',
  },
  '& .MuiDialogContent-root': {
    color: '#3a3a3c',
  },
  '& .MuiButton-root': {
    backgroundColor: '#4A90E2', // Serene blue
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#3a78b5', // Darker on hover
    },
  },
}));

const OnboardingModal = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CustomDialog open={open} onClose={handleClose}>
      <DialogTitle>Welcome to Elven AI!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Here's how to get started: <br />
          - Step 1: Click The Menu Button in the Top Right Corner! <br />
          - Step 2: Choose your Prompt <br />
          - Step 3: Wait for your Response <br />
          - Step 4: Repeat! <br />
          ...
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Get Started</Button>
      </DialogActions>
    </CustomDialog>
  );
};

export default OnboardingModal;
