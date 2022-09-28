// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import {Typography, Divider, Chip} from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom sx={{mt: '1em'}}>
        Call a Friend
      </Typography>
      <Divider>
        <Chip label="Your friendly contact app" />
      </Divider>
    </>
  );
};

export default Header;
