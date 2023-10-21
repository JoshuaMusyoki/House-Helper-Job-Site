import { Box, Button, Card, Stack, styled } from '@mui/material'
import React from 'react'
import headerImage from '../images/jobbg.jpg';
import SearchInputEl from './searchInputEl';


const Header = () => {
  const StyledHeader = styled(Box)(({ theme }) => (
    {
     display:"flex",
     justifyContent:'center',
     alignItems: 'center',
     backgroundSize:"cover",
     backgroundImage: `url(${headerImage})`,
     minHeight:300,
     backgroundPosition:"center",
     backgroundColor:theme.palette.secondary.main
    }
  ));
  const StyledButtons = styled(Box)(({ theme }) => (
    {
     display:"flex",
     justifyContent:'center',
     alignItems: 'center',
     backgroundSize:"cover",
     backgroundColor:'FF0000',
     minHeight:150,
     backgroundPosition:"center",
     backgroundColor:theme.palette.secondary.main
    }
  ));
  return (
    <>
    <StyledHeader>
      <SearchInputEl />
     
    </StyledHeader>
    <StyledButtons>
      <Stack justifyContent='center' alignItems='center' direction='column' spacing={2}>
      <b><h3>Looking for the best Domestic Helpers?</h3></b>
      <h5>Easily connects Helpers and Employers</h5>
     
   
      <Box>
      <Stack direction="row" spacing={2}>
      <Button variant="helper" href="/UserRegister">
        Helper
      </Button>
      <Button variant="employer" href="/UserRegister">
        Employer
      </Button>
    </Stack>
      </Box>
      </Stack>
    </StyledButtons>
    
    </>
  )
  }

export default Header