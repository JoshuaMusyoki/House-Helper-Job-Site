import React from "react";
import { Card, Box, CardContent, Typography, Button } from "@mui/material";

const Jobs=({job})=>{

    return(
        <>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}} m={2}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {job.title}
                    </Typography>
                    <Typography variant="body2" component="div">
                        {job.description}
                    </Typography>
                    <Typography >
                        {job.salary}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {job.location}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {job.jobType}
                    </Typography>

                    <Button variant="contained" color="primary">
                        Apply Now
                    </Button>
                </CardContent>
            </Card>

        </Box>
        </>
    )
}
export default Jobs