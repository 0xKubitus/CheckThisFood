import Recipes from "../components/Recipes";
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from '../api/axios';

const API_URL = "http://localhost:3001/recipes";

const getAPIData = () =>{
    return axios.get(API_URL).then((response) => response.data)
}

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
    <div>Homepage
      <h1>Les meilleures recettes</h1>
      <Recipes recipes = {recipes}/>
    </div>
  )
}

export default Home;