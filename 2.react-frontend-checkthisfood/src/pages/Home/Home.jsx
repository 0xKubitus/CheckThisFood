import Recipes from 'components/Recipes';
import SearchFoodData from 'components/SearchFoodData';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'api/axios';
import 'App.css';
import './Home.css';
import RecipeReviewCard from 'components/Card/Card';
import { Grid } from "@mui/material"
import {Route, BrowserRouter} from 'react-router-dom'


const API_URL = 'http://localhost:3001/recipes';
const getAPIData = () => {
    return axios.get(API_URL).then((response) => response.data);
    
};


const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        let mounted = true;
        getAPIData().then((items) => {
            if (mounted) {
                setRecipes(items);
            }
        });
        return () => (mounted = false);
    }, []);

    return (
        
        <div className="Home">
            
            Homepage
            <h1>Les meilleures recettes</h1>
            <Grid container>
                <Grid item xs={4}>
                <RecipeReviewCard/>
                </Grid>
                <Grid item xs={4}>
                <RecipeReviewCard/>
                </Grid>
                <Grid item xs={4}>
                <RecipeReviewCard/>
                </Grid>
                </Grid>
            <Recipes recipes={recipes} />

            <SearchFoodData />
        </div>
    );
};

export default Home;
