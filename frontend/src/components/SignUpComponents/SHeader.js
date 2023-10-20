import { Avatar, Box } from "@mui/material"
import React from "react"
import headerImage from '../../images/jobbg.jpg';
import Progress from "./Progress";
import styled from "@emotion/styled";
const SHeader = ()=>{
    const StyledHeader = styled(Box)(({ theme }) => (
        {
         display:"flex",
         justifyContent:'center',
         alignItems: 'center',
         backgroundSize:"cover",
         backgroundImage: `url(${headerImage})`,
         minHeight:100,
         backgroundPosition:"center",
         backgroundColor:theme.palette.secondary.main
        }
      ));

    return(
        <>
        <div>
        <StyledHeader>
        <Avatar sx={{ height:"6vh", m: 1, bgcolor: "primary.main", mb: 3 }}>
                        </Avatar>
                    <Box sx={{height:'8vh', display:'flex',alignItems:'center', justifyContent:'center'}}>
                        <h3>Registration</h3>
                    </Box>
        </StyledHeader>
        
        </div>
        </>
    )
}
export default SHeader;