// import { Component } from "react";
import SidebarAdm from './Sidebar';
import { Box } from "@mui/material";
import HeaderTop from './HeaderTop';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const Layout=(Component)=>(({...props})=>{
    return(
        <>
        <div style={{display:'flex', minHeight:'100vh'}}>
            <SidebarAdm />
            <Box sx={{width:'100%',  bgcolor:'#002952'}}>
                <HeaderTop />
                <Box sx={{p:3}}>
                    <Component  {...props} />
                </Box>
               
            </Box>           
        </div>
        <Box sx={{width:"100%", bgcolor:'#002952'}}>
                {/* <Navbar /> */}
                <Footer />
            </Box>
        </>
    )
})
export default Layout