import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";



const useStyle = makeStyles({

    TextFieldSearch:{
        marginLeft:'5px',
        marginRight:'25px'       
    }
})

const ComponentTextField = () => {

    const classes = useStyle()

    return (

        <TextField 
            label='Search it!!'
            className = {classes.TextFieldSearch}
            id='text'
        >
        </TextField> 

    )

}
export default ComponentTextField;