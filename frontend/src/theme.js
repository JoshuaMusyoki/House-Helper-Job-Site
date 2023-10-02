import { createTheme } from "@mui/material/styles";
import { lightBlue, blue } from "@mui/material/colors";

export const theme=createTheme({
    palette:{
        primary:{
            main:blue[500]
        },
        secondary:{
            main:lightBlue[800],
            midNightBlue:'#000000'
        }
    }
})