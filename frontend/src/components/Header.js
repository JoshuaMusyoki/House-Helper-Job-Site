import { Box, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/jobbg.jpg';


const Header = () => {
  const StyledHeader = styled(Box)(({ theme }) => (
    {
     display:"flex",
     justifyContent:'center',
     backgroundSize:"cover",
     backgroundImage: `url(${headerImage})`,
     minHeight:400,
     backgroundPosition:"center",
     backgroundColor:theme.palette.secondary.main
    }
  ));
  return (
    <>
    <StyledHeader>
      
    </StyledHeader>
    </>
  )
  }

export default Header