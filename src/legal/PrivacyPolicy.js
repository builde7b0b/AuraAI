import React from 'react';
import { Box, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box sx={{ padding: '50px' }}>
      <Typography variant="h4" sx={{ marginBottom: '30px', textAlign: 'center' }}>
      Elven AI Privacy Policy
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        {/* Insert your privacy policy content here */}
        1. Introduction:
Welcome to Elven AI! We respect your privacy and are committed to protecting your personal information. This policy applies to all information collected through our website and chatbot service.

2. Information Collection:
We collect information you provide directly (such as name, email), as well as data related to your tarot readings and astrological inputs. Cookies and similar technologies are used to enhance your experience.

3. Use of Information:
Your information is used to personalize your experience, improve our service, and communicate with you about Elven AI updates and offerings.

4. Data Sharing and Disclosure:
Information may be shared with service providers who assist us in our operations. We will disclose information if required by law, but we will never sell your data.

5. Data Security:
We use industry-standard measures like encryption and secure servers to protect your data.

6. User Rights and Choices:
You have the right to access, correct, or delete your personal information. Please contact us for assistance.

7. Changes to the Policy:
Any changes to our privacy practices will be posted on this page.

8. Contact Information:
Questions about this policy? Reach out to us at [your contact email].
        Last updated: [Date]
        <br /><br />
        Your privacy is important to us. It is Elven AI's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you...
      </Typography>
      {/* Continue with more detailed sections */}
    </Box>
  );
};

export default PrivacyPolicy;
