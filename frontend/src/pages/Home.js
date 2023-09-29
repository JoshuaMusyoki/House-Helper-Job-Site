import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Box } from '@mui/material'
const Home = () => {
  return (
    <>
    <Box sx={{bgcolor: "#fafafa", minHeight:'100vh'}}>
    <Navbar />
    <Header />
    </Box>
    </>
  )
}

export default Home