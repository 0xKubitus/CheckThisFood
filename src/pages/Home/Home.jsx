import Recipes from 'components/Recipes';
import SearchFoodData from 'components/SearchFoodData';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'api/axios';
import 'App.css';
import './Home.css';
import RecipeReviewCard from 'components/Card/Card';
import { Grid } from '@mui/material';
import { Route, BrowserRouter } from 'react-router-dom';
import { Margin } from '@mui/icons-material';
import hero from 'assets/images/hero.gif';

const Home = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const API_URL = 'http://localhost:3001/trends';
        axios.get(API_URL).then((resp) => setRecipes(resp.data.data));
        // eslint-disable-next-line
    }, []);
    console.log(recipes);
    return (
        <div className="Home">
            <img style={{ width: '100%', height: '600px', marginLeft: '15px', objectFit: 'cover' }} src={hero} alt="heroimg"></img>

            <h1>Notre sélection</h1>
            <Grid container sx={{ justifyContent: 'center', padding: '5px' }}>
                {recipes.map((item) => (
                    <Recipes title={item.attributes.title} description={item.attributes.description} carbohydrates={item.attributes.carbohydrates} calories={item.attributes.calories} image={item.attributes.image_url} id={item.id} />
                ))}
            </Grid>
        </div>
    );
};

export default Home;
