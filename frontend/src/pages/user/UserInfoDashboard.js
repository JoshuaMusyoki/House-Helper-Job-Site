import { useTheme } from '@emotion/react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const UserInfoDashboard = () => {
    const { user } = useSelector(state => state.userProfile);
    const {palette}=useTheme();
  return (
    <>
    <Box sx={{minWidth:"50%", margin:"auto", pt:10 }}>
        <Card sx={{minWidth:275, bgcolor:palette.secondary.midNightBlue}}>
            <CardContent>
                <Typography sx={{fontSize:16}} color="#fafafa" gutterBottom>
                    Personal Info
                </Typography>
                <hr style={{marginBottom:"30px"}} />
                <Typography variant='h6' component="div" sx={{color:"#fafafa"}}>
                    FirstName: {user && user.firstName}
                </Typography>
                <Typography variant='h6' component="div" sx={{color:"#fafafa"}}>
                    LastName: {user && user.lastName}
                </Typography>
                <Typography variant='h6' component="div" sx={{color:"#fafafa"}}>
                    Email: {user && user.email}
                </Typography>
                <Typography sx={{mb:1.5, color:"grey", pt:2}} color="text.secondary">
                    Status: {user && user.role===0 ? "Regular User" : "Admin"}
                </Typography>
            </CardContent>
        </Card>
    </Box>
    </>
  )
}

export default UserInfoDashboard