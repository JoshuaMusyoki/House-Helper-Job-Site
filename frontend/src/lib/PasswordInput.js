import { Visibility, VisibilityOff } from "@material-ui/icons";
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react"

const PasswordIput = (props) =>{
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = ()=>{
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword =(event) =>{
        event.preventDefault();
    };
    return(
        <>
        <FormControl variant="outlined" error={props.error ? props.error:null}>
            <InputLabel htmlFor="outlined-adornment-password">
               {props.label}
            </InputLabel>
            <OutlinedInput
            id="outlined=adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            }
            value={props.value}
            onChange={(event) => props.onChange(event)}
            labelWidth={props.labelWidth ? props.labelWidth : 70}
            className={props.className}
            onBlur={props.onBlur ? props.onBlur : null}
            />
            {props.helperText ?(
                <FormHelperText>{props.helperText}</FormHelperText>
            ):null}
        </FormControl>
        </>
    );
};
export default PasswordIput;