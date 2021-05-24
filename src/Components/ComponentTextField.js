import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";



const useStyle = makeStyles({

    TextFieldSearch:{
        marginLeft:'5px',
        marginRight:'45px'       
    }
})

const ComponentTextField = () => {

    const classes = useStyle()

    return (

        <TextField 
            label='Search'
            className = {classes.TextFieldSearch}
        >
            Search
        </TextField> 

    )

}
export default ComponentTextField;