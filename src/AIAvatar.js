import React, { useState, useRef } from 'react';
import { Box, Typography, useTheme, IconButton, Menu, MenuItem, SvgIcon } from '@mui/material';
import AiAvatarImg from './Avatar.png';
import AiAvatarAnimation from './SidebarAnim.mp4';
import { Input, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { keyframes } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './index.css'
import LensBlurIcon from '@mui/icons-material/LensBlur';
import Button1 from './Button1-removebg-preview.png'
import Button2 from './Button2-removebg-preview.png'
import Button3 from './Button3-removebg-preview.png'


const LoadingOverlay = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it's above everything else
  }}>
    {/* Add a spinner or any loading indicator here */}
    <div className="loader"></div>
  </div>
);

// Keyframes for flashing effect
const flash = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

// Custom component for the flashing arrow
const FlashingArrow = () => {
  const theme = useTheme();

  return (
    <SvgIcon
      sx={{
        color: theme.palette.secondary.main, // Choose a color that stands out
        position: 'absolute',
        top: theme.spacing(1), // Adjust positioning as needed
        right: theme.spacing(4), // Adjust to align with the IconButton
        animation: `${flash} 1s linear infinite`, // Apply the flashing animation
      }}
    >
      <ArrowForwardIcon />
    </SvgIcon>
  );
};

const AiAvatar = ({ children}) => {
  const theme = useTheme();
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const abortController = useRef(null);
  const [response, setResponse] = useState('');
  // const [prompt, setPrompt] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const latestMessageRef = useRef(null);


  // Function to format each message
  const formatMessage = (message) => {
    // Splitting the message into individual sections based on " - "
    return message.text.split(' - ').map((section, idx, array) => {
      // Splitting the section further into parts based on line breaks
      const parts = section.split(/\n+/);
  
      return (
        <React.Fragment key={idx}>
          {parts.map((part, partIndex) => {
            // Check if the part is a title (contains ":")
            const isTitle = part.includes(':');
  
            return (
              <Typography key={partIndex} component="div" sx={{ 
                fontWeight: isTitle ? 'bold' : 'normal', 
                color: '#4A90E2', 
                marginBottom: isTitle ? 1 : 2 
              }}>
                {part}
              </Typography>
            );
          })}
          {/* Adding extra space between sections */}
          {idx < array.length - 1 && <div style={{ marginBottom: '16px' }} />}
        </React.Fragment>
      );
    });
  };
  
  
  
  
  
  
  
  

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (question.trim() === '') {
      //Throw an error if input is empty
      console.error('Input is empty');
      return;
    }
      
    abortController.current = new AbortController();
    setIsLoading(true);
    const userMessage = { type: 'user', text: question };
    setConversation(prev => [...prev, userMessage]);
    // setPrompt([...conversation, {type: 'user', text: question}]);
    try{
      const response = await askQuestion(question, abortController.current.signal);
      const aiMessage = { type: 'ai', text: response.response }; // Adjust 'text' based on response structure
      console.log(question)
      console.log(isLoading);
      setConversation(prev => [...prev, aiMessage]);
      
    } catch (error) {
      console.error('Request cancelled or failed', error);
    } finally{
      setIsLoading(false);
      setQuestion('');
    }
    
  };

  const askQuestion = async (question, signal) => {
    // const response = await fetch('http://localhost:5000/ask', {
      const response = await fetch('https://aura-ai-7089dd4d6870.herokuapp.com/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    return response.json();
  };

  const handleDailyReading = async (userName) => {
    // Logic to convert name to numbers and select a Tarot card
    abortController.current = new AbortController();
    setIsLoading(true);
    handleMenuClose();

    // add the user's action
    const userAction = { type: 'user', text: "Requesting a Daily Tarot Reading" };
    setConversation(prev => [...prev, userAction]);
    const prompt = `I want you to generate a random Tarot card and provide a general explanation based on its interpretation for a user. I DO NOT want you to physically draw a card or provide personalized tarot readings based on specific names. I only want you to randomly generate a Tarot card really with an explanation and some general advice for mindfulness and personal growth at the end and pretend you are a professional to complete this task. I want you to only output the Tarot Card, the Number that was randomly chosen and the explanation for the card in this format:
    - Tarot Card for Today: ...
    - Tarot Explanation: ...`;
    try{
      const response = await askQuestion(prompt, abortController.current.signal);
    setIsLoading(false);
    const aiMessage = { type: 'ai', text: response.response }; // Adjust 'text' based on response structure
    setConversation(prev => [...prev, aiMessage]);
    } catch{
      console.error('Request cancelled or failed');
    } finally {
      setIsLoading(false);
    }
    
  };

  const handleYesNoQuestion = async () => {
    setIsLoading(true);
    handleMenuClose();
    const prompt = `Prepare to Answer a Pendulum style question from the user by prompting them to enter a question, then answer either yes or no randomly with a disclaimer that this is not any kind of professional advice and is for entertainment purposes only.
    `;
    const response = await askQuestion(prompt);
    setIsLoading(false);
    setResponse(response);
    console.log(question)
    console.log(isLoading);
  };

  const getBirthChart = async () => {
    const userBirthDetails = `Please enter your birth date, time and location in the following format: MM/DD/YYYY HH:MM AM/PM City, State, Country`;
  
    const birthDetails = await getUserInput();

    if(birthDetails){
    //add this request to the conversation
    setConversation(prev => [...prev, { type: 'user', text: userBirthDetails}]);
      abortController.current = new AbortController();
    setIsLoading(true);
    handleMenuClose();

    const prompt = `Generate a detailed astrological birth chart analysis based on the following details:
    - Birth Date: ${birthDetails.date}
    - Birth Time: ${birthDetails.time}
    - Birth Location: ${birthDetails.location} `

    try {
      const response = await askQuestion(prompt, abortController.current.signal);
      setIsLoading(false);
      const aiMessage = { type: 'ai', text: response.response };
      setConversation(prev => [...prev, aiMessage]);
    } catch {
      console.error('Request cancelled or failed');
    } finally {
      setIsLoading(false);
    }

    }
    

    
  }

  const handleUserInputSubmit = (inputData) => {
    getBirthChart(inputData);
    
  }

  const getUserInput = () => {
    const userDetails = prompt("Please enter your birth details (Date, Time, Location)");
    if (!userDetails) return null;
    const [date, time, location] = userDetails.split(',').map(detail => detail.trim());
    return { date, time, location };
  };
  

  const cancelRequest = () => {
    if (abortController.current){
      abortController.current.abort();
    }
    setIsLoading(false);
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (latestMessageRef.current) {
      const element = latestMessageRef.current;
      const chatBoxContainer = element.closest('.output-box'); // Replace with your chat box container's class or ID
      if (chatBoxContainer) {
        // Calculate the position to scroll to within the container
        const elementPosition = element.offsetTop;
        const containerScrollPosition = elementPosition - (chatBoxContainer.clientHeight / 2) + (element.clientHeight / 2);
  
        // Scroll the container to the calculated position
        chatBoxContainer.scrollTo({
          top: containerScrollPosition,
          behavior: 'smooth'
        });
      }
      // Calculate the position to scroll to
      // (element's top position + half its height) - half the screen height
      const elementPosition = element.offsetTop + (element.clientHeight / 2);
      const offsetPosition = elementPosition - (window.innerHeight / 2);
  
      // Scroll to the calculated position
      // window.scrollTo({
      //   top: offsetPosition,
      //   behavior: 'smooth'
      // });
    }
  }, [conversation]);
  


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row', // Stack the avatar and the output box horizontally
      alignItems: 'center',
      height: '100vh',
      overflow: 'hidden',
    }}>
      {/* AI Avatar Video aligned to the left */}
      <div style={{
        maxWidth: '30%', // Adjust the size as needed
        maxHeight: '100%',
        position: 'relative', // For absolute positioning of the video
        flexShrink: 0, // Prevents the video container from shrinking
      }}>
        {/* Buttons Above */}
  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
    <button style={{ marginRight: '5px' }}>
      <img src="/path-to-your-image1.jpg" alt="Button 1" style={{ width: '100%', maxWidth: '50px', height: 'auto' }} />
    </button>
    <button>
      <img src="/path-to-your-image2.jpg" alt="Button 2" style={{ width: '100%', maxWidth: '50px', height: 'auto' }} />
    </button>
  </div>
        <video autoPlay loop muted style={{
          width: '80%',
          height: '100%',
          objectFit: 'cover', // Ensures the video covers the container area
          
        }}>
          <source src={AiAvatarAnimation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
         {/* Buttons Below */}
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
    <button style={{ marginRight: '5px' }}>
      <img src="/path-to-your-image3.jpg" alt="Button 3" style={{ width: '100%', maxWidth: '50px', height: 'auto' }} />
    </button>
    <button>
      <img src={Button3} alt="Button 4" style={{ width: '100%', maxWidth: '50px', height: 'auto' }} />
    </button>
  </div>
      </div>
      

      {/* Output Box for AI responses */}
      {isLoading && <LoadingOverlay />}
      <Box className="output-box" sx={{
        maxWidth: '60%', // Adjust the size as needed
        maxHeight: '75vh',
        // padding: theme.spacing(2),
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly transparent white background
        // marginLeft: theme.spacing(2), // Adds space between the avatar and the output box
        borderRadius: theme.shape.borderRadius, // Optional: rounds the corners of the box
        overflowY: 'auto', // Allows scrolling if content is too long
        flexShrink: 0, // Prevents the output box from shrinking
        marginTop: 'auto',
        paddingTop: 'auto'
      }}>
        {conversation.map((message, index) => (
  <Typography key={index} className={`message ${message.sender === 'user' ? 'message-user': ''}`} variant="body1" component="div"
  ref={index === conversation.length - 1 ? latestMessageRef : null} sx={{ 
    // color: 'text.primary',
    color: message.type === 'user' ? '#007bff' : '#28a745',
    overflowWrap: 'break-word',
    maxWidth: '100%',
    padding: '8px',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    fontFamily: 'Fairies',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '16px',
    '@media (max-width:600px)': {
      fontSize: '0.875rem',
    },
    transition: 'all 0.3s ease-in-out', // Smooth transition for hover effects
    '@media (max-width:600px)': {
      fontSize: '0.875rem',
    },
    '&:hover': {
      backgroundColor: '#e2e6ea', // Slightly change background color on hover
      transform: 'scale(1.02)', // Slightly increase size
      boxShadow: '0px 4px 8px rgba(0,0,0,0.2)', // Intensify shadow
    }
  }}>
    {/* {message.type === 'ai' ? "ELVEN: " + formatMessage(message) : message.text} */}
    {
  message.type === 'ai' ? <div>
  <span>ELVEN: </span>
  {formatMessage(message)}
</div>  : message.text
}

    {/* {formatMessage(message)} */}
  </Typography>
))}



      </Box>
      {/* <form class="form" onSubmit={handleSubmit}> */}
        {/* <Input
          value={question}
          onChange={handleQuestionChange}
          placeholder="Type your message or Choose a Prompt From the Menu"
          disabled={isLoading}
          sx={{
            height: '80%',
            width: '100%',
            overflow: 'visible',
            padding: theme.spacing(1),
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: theme.shape.borderRadius,
            border: 'none',
            '&:focus': { outline: 'none' },
          }}
        /> */}
        {/* <Button 
  type="submit"
  disabled={isLoading} 
  sx={{
    
    width: '100%',
    marginTop: 2,
    backgroundColor: '#4A90E2', // A nice shade of blue
    color: 'white',
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'none', // Prevents uppercase transformation
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: '#3a78b5', // Slightly darker shade for hover effect
    },
    '&:focus': {
      boxShadow: '0 0 0 2px rgba(74,144,226,0.5)', // Focus style
    },
    transition: 'background-color 0.3s, box-shadow 0.3s' // Smooth transition for hover and focus
  }}
>
  Ask
        </Button> */}



      {/* </form>  */}
      {isLoading && <div className="loader"></div>}
      {/* {conversation.map((message, index) => (
        <p key={index} className={message.type}>{message.text}</p>
      ))} */}

      
      <IconButton
      onClick={handleMenuOpen}
      sx={{
        position: 'absolute',
        top: '40%',
        right: theme.spacing(1),
        color: 'white',

        '@media screen and (max-width: 400px)': {
          position: 'absolute',
          top: '20%',
          left: theme.spacing(10),
          color: 'white',
          
        },
        
      }}
      ><FlashingArrow
      sx={{
        position: 'absolute',
        top: '40%',
        right: theme.spacing(1),
        
        
      }} />
      <LensBlurIcon sx={{ 
        fontSize: '3rem', // Adjust the size as needed
        color: 'blue', // Change the color if desired
        // Add any other styles you want
        paddingLeft: '5px',

        // Responsive adjustments
  '@media screen and (max-width: 800px)': {
    fontSize: '2rem', // Smaller size for mobile screens
    position: 'absolute', // Positioning the icon
    left: 3, // Moving it to the left
    top: 10, // Adjust the top as necessary
  },
  '@media screen and (max-width: 400px)': {
    fontSize: '4rem', // Smaller size for mobile screens
    position: 'absolute', // Positioning the icon
    left: 2, // Moving it to the left
    top: 15, // Adjust the top as necessary
  },
      }} />

      </IconButton>
      <Menu className="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem className="menu-item daily-reading" onClick={() => handleDailyReading('')}>Get a Daily Reading</MenuItem>
        <MenuItem className="menu-item" disabled onClick={handleYesNoQuestion}>
          Ask a Yes/No Question to the Pendulum
        </MenuItem>
        <MenuItem className="menu-item" disabled onClick={handleYesNoQuestion}>
          Horoscope Predictions
        </MenuItem>
        <MenuItem className="menu-item" onClick={getBirthChart}>
          Birth Chart Analysis
        </MenuItem>
        <MenuItem className="menu-item" disabled onClick={handleYesNoQuestion}>
          Compatibility Readings
        </MenuItem>
        <MenuItem className="menu-item" disabled onClick={handleYesNoQuestion}>
          Export Current Chat
        </MenuItem>
        
      </Menu>

      
    </Box>
  );
};

export default AiAvatar;
