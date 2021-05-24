import React from "react";
import Buttom from '@material-ui/core/Button';
import ComponentTextField from "./ComponentTextField";


const ComponentSearch =() =>{

    return(
        <>  
            <ComponentTextField/>
            <Buttom variant='contained' color='primary' size='medium'>GO!</Buttom>
        </>
    );

}

export default ComponentSearch;