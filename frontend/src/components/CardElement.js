import { useTheme } from "@emotion/react"
import { Button, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

const CardElement=({jobTitle, description, category, location, id })=>{
    const {palette}=useTheme();

    // Check if description is defined and is a string before splitting
    const truncatedDescription = description && typeof description === 'string'
        ? description.split("").slice(0, 15).join("") + "..."
        : "";
    return(
        <Card sx={{minWidth:257, mb:3, mt:3}}>
            <CardContent>
                <Typography sx={{fontSize:15, color:palette.secondary.main, fontWeight:500}} gutterBottom>
                    <IconButton><LocationOnIcon sx={{color:palette.secondary.main, fontSize:18}}/></IconButton>
                    {location}
                </Typography>
                <Typography variant="h5" component="div">
                    {jobTitle}
                </Typography>
                <Typography sx={{mb:1.5}}color="text.secondary">
                    {category}
                </Typography>
                <Typography variant="body2">
                    {/* Description:{description.split("").slice(0, 15).join("")+"..."} */}
                    Description:{truncatedDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button disableElevation variant="contained" size="small" startIcon={<AddIcon />}>
                <Link style={{textDecoration:"none",color:"white", boxShadow:0}} to={`/job/${id}`}>More Details</Link>
                </Button>
            </CardActions>
        </Card>
    );
}
export default CardElement;