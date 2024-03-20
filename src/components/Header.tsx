import React from 'react';
import {Typography ,Box}from '@mui/material';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Box>

    <Typography variant="h1" component="h1" sx={{marginBlock: "2rem",marginInline: 0}} gutterBottom>
      {title}
    </Typography>
    </Box>
  );
};

export default Header;
