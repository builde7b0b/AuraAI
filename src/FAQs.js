import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
  const faqs = [
    {
      question: "What kind of services does Elven AI offer?",
      answer: "Elven AI provides personalized tarot readings, horoscope predictions, and mindfulness advice, among other spiritual services."
    },
    {
      question: "Is Elven AI suitable for beginners in spirituality?",
      answer: "Absolutely! Our chatbot is designed to be user-friendly and informative for both beginners and those more experienced in spiritual practices."
    },
    {
      question: "How can I trust the accuracy of Elven AI's readings?",
      answer: "While Elven AI's readings are based on well-established spiritual practices, they should be considered as guidance rather than definitive answers."
    },
    {
      question: "Can Elven AI help me with personal advice?",
      answer: "Elven AI offers general spiritual and mindfulness advice but is not a substitute for professional personal counseling."
    },
    {
      question: "Is my personal information safe with Elven AI?",
      answer: "We prioritize your privacy and confidentiality. Your interactions with Elven AI are not shared with third parties."
    }
  ];

  return (
    <Box sx={{ padding: '50px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" sx={{fontFamily: 'Fairies', textAlign: 'center', marginBottom: '30px' }}>
        FAQs
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{fontWeight:'bold'}}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{color:'#9a5636'}}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQs;
