import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, SliderValueLabel, Stack, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { jobLoadAction } from '../redux/actions/jobActions'
import { Link, useParams } from 'react-router-dom'
import CardElement from '../components/CardElement'
import Footer from '../components/Footer'
import LoadingBox from '../components/loadingBox'
import SelectComponent from '../components/selectComponents'
import { jobTypeLoadAction } from '../redux/actions/jobTypeActions'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatWeDoAsJobProvider from '../components/homeComponents/WhoWeAre'
import Sidebar from '../pages/global/Sidebar'

const Home = () => {
  // const {jobs, SetUniqueLocation, pages, loading}=useSelector(state=>state.loadJobs);
  // const {palette}=useTheme();
  // const dispatch =useDispatch();
  // const {keyword, location}=useParams();

  // const [page, setPage]=useState(1);
  // const [cat, setCat]=React.useState('');

  // useEffect(()=>{
  //   dispatch(jobLoadAction(page,cat, keyword, location))
  // },[page, keyword, cat, location])

  // useEffect(()=>{
  //   dispatch(jobTypeLoadAction());
  // },[])

  // const handleChangeCategory =(e) =>{
  //   setCat(e.target.value);
  // }
  return (
    <>
    <Box sx={{bgcolor: "#fafafa", minHeight:'100vh'}}>
    <Navbar />
    <Header />

    
    <Container>
      <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      >
         {/* <Sidebar /> */}
         <WhatWeDoAsJobProvider />
      </Stack>
    </Container>
    </Box>
    
    <Footer />
    </>
  )
}

export default Home