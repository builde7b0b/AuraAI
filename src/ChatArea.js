import React, { useState, useRef } from 'react';
import { Box, Input, Button, useTheme } from '@mui/material';
import ChatBotImg from './ChatBot.png';
import CircularProgress from '@mui/material/CircularProgress';
import './App.css';

const ChatArea = ({setResponse}, {setPrompt}) => {
  const theme = useTheme();
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  const abortController = useRef(null);

  // const [response, setResponse] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    abortController.current = new AbortController();
    setIsLoading(true);
    setConversation([...conversation, { type: 'user', text: question}]);
    setPrompt([...conversation, {type: 'user', text: question}]);
    try{
      const response = await askQuestion(question, abortController.current.signal);
      setIsLoading(false);
      setResponse(response);
      setQuestion('')
      console.log(question)
      console.log(isLoading);
      
    } catch (error) {
      console.error('Request cancelled or failed', error);
    }
    
  };

  const askQuestion = async (question, signal) => {
    const response = await fetch('http://localhost:5000/ask', {
      // const response = await fetch('https://aura-ai-7089dd4d6870.herokuapp.com/ask', {
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
        justifyContent: 'flex-start', // Align content to the top
        alignItems: 'center',
        // position: 'relative',
        paddingTop: '10px', // Add some padding at the top
      }}
    >
      
      
    </Box>
  );
};

export default ChatArea;
