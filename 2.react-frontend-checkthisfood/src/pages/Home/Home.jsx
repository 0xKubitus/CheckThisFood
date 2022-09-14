import Recipes from 'components/Recipes';
import SearchFoodData from 'components/SearchFoodData';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'api/axios';
import 'App.css';
import './Home.css';
import NewRecipe from "components/NewRecipe";
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

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
            <Recipes recipes={recipes} />
            <SearchFoodData />
        </div>
    );
};

export default Home;
