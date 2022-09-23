import Recipes from 'components/Recipes';
import SearchFoodData from 'components/SearchFoodData';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'api/axios';
import 'App.css';
import './Home.css';
import { Grid } from "@mui/material"
import {Route, BrowserRouter} from 'react-router-dom'
import { Margin } from '@mui/icons-material';



const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        const API_URL = 'http://localhost:3001/recipes';
        axios.get(API_URL).then((resp) => setRecipes(resp.data.data));
         // eslint-disable-next-line
    }, []);
console.log(recipes)
    return (
        
        <div className="Home">
            
            Homepage
            <h1>Les meilleures recettes</h1>
            <SearchFoodData />
            <Grid container sx={{justifyContent: 'center', padding:'5px'}}>
                <Grid item xs={4}>
                { 
recipes.map((item => 

<Recipes 
title={item.attributes.title}
description={item.attributes.description} 
carbohydrates={item.attributes.carbohydrates}
calories={item.attributes.calories}
image={item.attributes.image_url}
id={item.id} />
))
           
}
                </Grid>

                </Grid>
              




           
        </div>
    );
};

export default Home;
