import React from "react";
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import PokemonImage from "./PokemonImage";

const useStyles = makeStyles({
    root: {
      height:'100%',
    }
  });


const Item = (props) =>{  
    
    const classes = useStyles();

    return(
        <Container>
            <Card className={classes.root}>
                <CardContent>
                    {props.pokemonName}
                    <PokemonImage/>
                </CardContent>  
            </Card>
        </Container>
    )

}

const Container = styled.div`
    height: 350px;
    width: 300px;
    text-align: center;
    margin: 5px;
`


export default Item;