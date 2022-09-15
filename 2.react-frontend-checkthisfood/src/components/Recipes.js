import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Recipes = (recipe) => {

    return (
        <div key={recipe.id}>
            {recipe.recipes.map((recipe) => {
                return (
                    <div className="card">
                        {' '}
                        <h2> {recipe.title} </h2>
                        <img src={recipe.image_url} width={300}></img>
                        <p>{recipe.description}</p>
                        <p>Glucides : {recipe.carbohydrates}</p>
                        <p>Calories : {recipe.calories}</p>
                        
                        <Link recipe ={recipe.id} to={`recipes/${recipe.id}`}>voir</Link>
                        
                    </div>
                );
            })}
        </div>
    );
};

export default Recipes;
