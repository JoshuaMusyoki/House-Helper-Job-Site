import { Box } from "@mui/material"
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
            <h1>Registration</h1>
            <Progress />
        </StyledHeader>
        </div>
        </>
    )
}
export default SHeader;