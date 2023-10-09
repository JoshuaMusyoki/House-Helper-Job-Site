import styled from "@emotion/styled"
import { AppBar, IconButton, InputBase, Toolbar, Typography, alpha } from "@mui/material";
import { Box, height, padding, spacing } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {useProSidebar} from 'react-pro-sidebar';

const Search=styled('div')(({theme})=>({
    position:'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover':{
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft:0,
    width:'100%',
    [theme.breakpoints.up('sm')]:{
        marginLeft:theme.spacing(1),
        width:'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme })=>({
    padding:theme.spacing(0,2),
    height:'100%',
    position:'absolute',
    PointerEvents:'none',
    flex:'display',
    justifyContent:'center',
    alignItems:'center'
}));
const StyledInputeBase=styled(InputBase)(({theme})=>({
    color:'inherit',
    '&. MuiInputBase-input':{
        padding:theme.spacing(1,1,1,0),
        // vertical padding + font size from searchIcon
        paddingLeft:`calc(1com +${theme.spacing(4)})`,
        transition:theme.transitions.create('width'),
        width:'100%',
        [theme.breakpoints.up('sm')]:{
            width:'12ch',
            '&.focus':{
                width:'20ch',
            },
        },
    },
}));
const HeaderTop = ()=>{
    const {collapseSidebar}=useProSidebar();
    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{boxShadow:0}}>
                <Toolbar>
                    <IconButton onClick={()=> collapseSidebar()}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-aria-label="open drawer"
                    sx={{mr:2}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{flexGrow:1, display:{xs:'none', sm:'block'}}}
                    >
                        EMPLOYER DASHBOARD
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputeBase 
                        placeholder="search..."
                        inputProps={{'aria-label':'search'}}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default HeaderTop