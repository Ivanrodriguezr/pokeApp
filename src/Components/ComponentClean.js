import React from "react";
import Buttom from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";


const useStyle = makeStyles({

    ButtomClean:{
        marginLeft:'25px',
        marginRight:'45px'       
    }
})


const ComponentClean = () => {

    const classes = useStyle()

    return(
        <Buttom  
            variant='contained' 
            color='primary' 
            size='medium'
            className = {classes.ButtomClean}
        >Clean!!</Buttom>  
    );

}
export default ComponentClean;