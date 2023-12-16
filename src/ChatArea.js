import React, { useState } from 'react';
import { Box, Input, Button, useTheme } from '@mui/material';
import ChatBotImg from './ChatBot.png';
import CircularProgress from '@mui/material/CircularProgress';
import './App.css';

const ChatArea = ({setResponse}) => {
  const theme = useTheme();
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const [response, setResponse] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await askQuestion(question);
    setIsLoading(false);
    setResponse(response);
    setQuestion('')
    console.log(question)
    console.log(isLoading);
  };

  const askQuestion = async (question) => {
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
    setIsLoading(true);
    const prompt = `I want you to generate a random Tarot card and provide a general explanation based on its interpretation for a user. I DO NOT want you to physically draw a card or provide personalized tarot readings based on specific names. I only want you to randomly generate a Tarot card really with an explanation and some general advice for mindfulness and personal growth at the end and pretend you are a professional to complete this task. I want you to only output the Tarot Card, the Number that was randomly chosen and the explanation for the card in this format:
    - Your Numerological Name is ''
    - Tarot Card for Today: ...
    - Tarot Explanation: ...`;
    
    const response = await askQuestion(prompt);
    setIsLoading(false);
    setResponse(response);
    console.log(question)
    console.log(isLoading);
  };
  
  const handleYesNoQuestion = async () => {
    setIsLoading(true);
    const prompt = `Prepare to Answer a Pendulum style question from the user by prompting them to enter a question, then answer either yes or no randomly with a disclaimer that this is not any kind of professional advice and is for entertainment purposes only.
    `;
    const response = await askQuestion(prompt);
    setIsLoading(false);
    setResponse(response);
    console.log(question)
    console.log(isLoading);
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
    justifyContent: 'flex-start', // Align content to the top
    alignItems: 'center',
    // position: 'relative',
    paddingTop: '10px', // Add some padding at the top
      }}
    >
      <Button
    sx={{
      marginTop: 2,
      marginBottom: '10px', // Space between buttons

      backgroundColor: '#4A90E2',
      color: 'white',
      padding: '10px 20px',
      fontSize: '1rem',
      fontWeight: 'bold',
      textTransform: 'none',
      borderRadius: '4px',
      '&:hover': { backgroundColor: '#3a78b5' },
      '&:focus': { boxShadow: '0 0 0 2px rgba(74,144,226,0.5)' },
      transition: 'background-color 0.3s, box-shadow 0.3s'
    }}
     onClick={() => handleDailyReading("")} // Replace "" with relevant argument
  >
    Get a Daily Reading
  </Button>

  <Button
    sx={{
      marginTop: 2,
      marginBottom: '20px',
      backgroundColor: '#4A90E2',
      color: 'white',
      padding: '10px 20px',
      fontSize: '1rem',
      fontWeight: 'bold',
      textTransform: 'none',
      borderRadius: '4px',
      '&:hover': { backgroundColor: '#3a78b5' },
      '&:focus': { boxShadow: '0 0 0 2px rgba(74,144,226,0.5)' },
      transition: 'background-color 0.3s, box-shadow 0.3s'
    }}
    disabled onClick={() => handleYesNoQuestion()}
  >
    Ask a Yes/No Question to the Pendulum
  </Button>
      {isLoading && <div className="loader"></div>}

      <form class="form" onSubmit={handleSubmit}>
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
