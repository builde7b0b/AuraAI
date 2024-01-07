import React from 'react';
import { Box, Typography } from '@mui/material';

const TermsOfService = () => {
  return (
    <Box sx={{ padding: '50px' }}>
      <Typography variant="h4" sx={{ marginBottom: '30px', textAlign: 'center' }}>
      Elven AI Terms of Service
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        {/* Insert your terms of service content here */}
        1. Acceptance of Terms:
By using Elven AI, you agree to these terms.

2. Use of Service:
Elven AI is for personal, non-commercial use. Any misuse or exploitation of the service is strictly prohibited.

3. Intellectual Property:
All content and software associated with Elven AI are our property. No copying or unauthorized use is permitted.

4. User Responsibilities:
Users must provide accurate information and respect the rights of others while using our service.

5. Disclaimers:
Our service is for entertainment purposes. We are not liable for any decisions made based on our guidance.

6. Limitation of Liability:
We are not liable for any indirect, incidental, or punitive damages arising from the use of Elven AI.

7. Termination:
We reserve the right to terminate or restrict access to users who violate these terms.

8. Governing Law:
These terms are governed by the laws of [Your Country/State].

9. Amendments:
We may update these terms and will notify users of significant changes.
        Last updated: [Date]
        <br /><br />
        These terms and conditions outline the rules and regulations for the use of Elven AI's Website, located at [Your Website URL]...
      </Typography>
      {/* Continue with more detailed sections */}
    </Box>
  );
};

export default TermsOfService;
