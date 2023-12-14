import React, { useState } from 'react';
import { Box, Input, Button, useTheme } from '@mui/material';
import ChatBotImg from './ChatBot.png';

const ChatArea = ({setResponse}) => {
  const theme = useTheme();
  const [question, setQuestion] = useState('');
  // const [response, setResponse] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await askQuestion(question);
    setResponse(response);
  };

  const askQuestion = async (question) => {
    const response = await fetch('http://localhost:5000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    return response.json();
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${ChatBotImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Input
          value={question}
          onChange={handleQuestionChange}
          placeholder="Type your message..."
          sx={{
            height: '80%',
            width: '100%',
            overflow: 'wrap',
            padding: theme.spacing(1),
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: theme.shape.borderRadius,
            border: 'none',
            '&:focus': { outline: 'none' },
          }}
        />
        <Button 
  type="submit" 
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
</Button>
      </form> 
    </Box>
  );
};

export default ChatArea;
