// Footer.jsx

import React from 'react';
import { styled} from '@mui/material/styles';
const FooterContainer =  styled('div')(({ theme }) => ({
  display:'flex',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    
    padding: '10px',
    textAlign: 'center',
    fontFamily:'Roboto',
    fontSize:'10px',
    fontWeight:700,
    justifyContent: 'space-between', // Align items to left and right


  
}));
const Footer = () => {
  return (
    
   <FooterContainer>
    <span>Orion data visualisation</span>
    <span>2022</span>


   </FooterContainer>
  );
};

export default Footer;
