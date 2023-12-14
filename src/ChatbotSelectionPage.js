import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardActionArea, CardContent, Typography, TextField } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { useNavigate } from 'react-router-dom';


const chatbotModels = [
    { name: 'PendulumProphet', category: 'Pendulum', description: 'Insights through pendulum divination.' },
    { name: 'CelestialScribe', category: 'Astrology', description: 'Personalized astrological guidance.' },
    // ... other models
];

const ChatbotSelectionPage = () => {
    const [filter, setFilter] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Add your code here if needed
        if(filter){
            navigate("/");
             
        }
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value.toLowerCase());
        //Let's navigate back to home page here
        
        
    };

    const switchPage = (modelName) => {
        navigate('/chat/' + modelName);  // Assuming you have a route for each chatbot
    };
      

    const filteredModels = chatbotModels.filter(model => 
        model.name.toLowerCase().includes(filter) || 
        model.category.toLowerCase().includes(filter)
    );

    return (
        <Box p={2}>
            <Typography variant="h4" mb={2}>Choose Your Chatbot</Typography>
            <TextField
                label="Search Chatbots"
                variant="outlined"
                fullWidth
                onChange={handleFilterChange}
                sx={{ marginBottom: 3 }}
            />
            <Grid container spacing={3}>
                {filteredModels.map(model => (
                    <Grid item xs={12} sm={6} md={4} key={model.name}>
                        <Card>
                        <CardActionArea onClick={() => switchPage(model.name)}>

                                <CardContent>
                                    <Typography variant="h5">{model.name}</Typography>
                                    <Typography variant="body2">{model.description}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ChatbotSelectionPage;
