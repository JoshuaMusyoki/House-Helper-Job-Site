import { useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, useParams } from 'react-router-dom';
import { jobLoadAction } from '../redux/actions/jobActions';
import { jobTypeLoadAction } from '../redux/actions/jobTypeActions';
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, Stack, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import SelectComponent from '../components/selectComponents';
import LoadingBox from '../components/loadingBox';
import CardElement from '../components/CardElement';


const JobView = () => {
    const {jobs, SetUniqueLocation, pages, loading}=useSelector(state=>state.loadJobs);
  const {palette}=useTheme();
  const dispatch =useDispatch();
  const {keyword, location}=useParams();

  const [page, setPage]=useState(1);
  const [cat, setCat]=React.useState('');

  useEffect(()=>{
    dispatch(jobLoadAction(page,cat, keyword, location))
  },[page, keyword, cat, location])

  useEffect(()=>{
    dispatch(jobTypeLoadAction());
  },[])

  const handleChangeCategory =(e) =>{
    setCat(e.target.value);
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
      <Box sx={{flex:2, p:2}}>
        <Card sx={{minWidth:150, mb:3, mt:3, p:2}}>
          <Box sx={{pb:2}}>
            <Typography component="h4" sx={{color:palette.secondary.main, fontWeight:600}}>
              Filter Job by Category
            </Typography>
          </Box>
          <SelectComponent handleChangeCategory={handleChangeCategory} cat={cat}/>
        </Card>
       
        {/* Filter jobs by location */}
          <Card sx={{minWidth:150, mb:3, mt:3, p:2}}>
            <Box sx={{pb:2}}>
              <Typography component="h4" sx={{color:palette.secondary.main, fontWeight:600}}>
                Filter Job by Location
              </Typography>
              <MenuList>
                {
                  SetUniqueLocation && SetUniqueLocation.map((location, i) => (
                    <MenuItem key={i}>
                      <ListItemIcon>
                        <LocationOnIcon sx={{color:palette.secondary.main, fontSize:18}}/>
                      </ListItemIcon>
                      <Link to={`/search/location ${location}`}>{location}</Link>
                    </MenuItem>
                    
                  ))
                  }
              </MenuList>
            </Box>
          </Card>
        </Box>
       

        <Box sx={{flex:5, p:2}}>
          {
            loading ?
            <LoadingBox />:
            jobs&&jobs.length == 0 ?
            <>
            <Box 
            sx={{
              minHeight:"150px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}>
              <h2>No result found</h2>
            </Box>
            </>:
            jobs&&jobs.map((job, i)=>(
              <CardElement
              key={i}
              id={job._id}
              jobTitle={job.title}
              description={job.description}
              category={job.jobType ? job.jobType.jobTypeName: "No Category"} 
              location={job.location}
               />
            ))
          }
          <Stack spacing={2}>
            <Pagination color="primary" variant='outlined' page={page} count={pages===0 ? 1: pages} onChange={(event, value)=> setPage(value)} />
          </Stack>
        </Box>
        
        </Stack>
    </Container>
    </Box>
   </>
  )
}
}

export default JobView