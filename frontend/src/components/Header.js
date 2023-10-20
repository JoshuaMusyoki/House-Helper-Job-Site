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
  return (
    <>
    <StyledHeader>
      <SearchInputEl />
     
    </StyledHeader>
    <Card sx={{justifyContent:"center", alignItems:"center"}}>
      <h1>Looking for the best Domestic Helpers?</h1><br />
      <h3>Easily connects Helpers and Employers</h3>
      <Box>
      <Stack direction="row" spacing={2}>
      <Button variant="helper" href="/Register">
        Helper
      </Button>
      <Button variant="employer" href="/adminSignUp">
        Employer
      </Button>
    </Stack>
      </Box>
    </Card>
    
    </>
  )
  }

export default Header