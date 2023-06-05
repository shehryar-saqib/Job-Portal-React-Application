// import React from 'react';

// export const Footer = () => {
//     return(
//         <footer>
//             <p>&copy; 2024 Jobbies. All Rights Reserved.</p>
//     </footer>
//     )
// }

import React from 'react';
import { Typography, Container } from '@mui/material';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', height: '75px', position: 'fixed', bottom: 0, left: 0, width: '100%' }}>
      <Container maxWidth="sm">
        <Typography variant="body2" align="center" color="white" style={{ fontWeight:'bold',position:'relative',top:'20px',fontSize:'20px' }}>
          &copy; {new Date().getFullYear()} Jobbies. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};



