import React from 'react';
import { Box, Typography, Link, Grid, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ padding: '50px', backgroundColor: '#9a5636', color: 'white' }}>
      <Grid container spacing={2}>
        {/* Navigation Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ marginBottom: '15px' }}>Explore</Typography>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '10px' }}>About Us</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '10px' }}>Contact</Link>
          <Link href="#" color="inherit" sx={{ display: 'block', marginBottom: '10px' }}>Terms of Service</Link>
          <Link href="#" color="inherit">Privacy Policy</Link>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ marginBottom: '15px' }}>Follow Us</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* <FacebookIcon sx={{ marginRight: '10px' }} /> */}
            <TwitterIcon sx={{ marginRight: '10px' }} />
            {/* <InstagramIcon /> */}
          </Box>
        </Grid>

        {/* Newsletter Signup */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ marginBottom: '15px' }}>Stay Updated</Typography>
          <TextField fullWidth placeholder="Enter your email" variant="outlined" size="small" sx={{ backgroundColor: 'white', marginBottom: '10px' }} />
          <Button variant="contained" color="primary">Subscribe</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
