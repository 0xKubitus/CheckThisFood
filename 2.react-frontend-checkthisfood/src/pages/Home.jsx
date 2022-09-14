import Recipes from 'components/Recipes';
import SearchFoodData from 'components/SearchFoodData';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'api/axios';
import '../App.css';
const API_URL = 'http://localhost:3001/recipes';
import NewRecipe from "../components/NewRecipe";
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

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

<<<<<<< HEAD
  return (
    <div>Homepage
      <h1>Les meilleures recettes</h1>
     
      <Recipes recipes = {recipes}/>
      <NewRecipe />
    </div>
  )
}
=======
    return (
        <div className="Home">
            Homepage
            <h1>Les meilleures recettes</h1>
            <Recipes recipes={recipes} />
            <SearchFoodData />
        </div>
    );
};
>>>>>>> 7f7a7180c695a7e0dc414c6fa56350b5ba1badeb

export default Home;
