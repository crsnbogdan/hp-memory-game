import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { defaultTheme } from '../themes';

const Footer = () => {
  return (
    <footer
      className="footer flex align-center justify-center p-6"
      style={{ height: '10vh' }}
    >
      <ThemeProvider theme={defaultTheme}>
        <div className="inline-flex flex-row">
          <Typography variant="p" color="primary" sx={{ fontSize: '18px' }}>
            © {new Date().getFullYear()}
          </Typography>
          <Typography variant="p" color="white" sx={{ fontSize: '18px' }}>
            - Crisan Bogdan
          </Typography>
        </div>
      </ThemeProvider>
    </footer>
  );
};

export default Footer;
