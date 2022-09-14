import React, { useState } from 'react'

const Recipes = (props) => {

  return (
    <div>
        {props.recipes.map((recipe) => {
            return <div className='card'> <h2> {recipe.title} </h2>
            <p>{recipe.description}</p>
            <p>Glucides : {recipe.carbohydrates}</p>
            <p>Calories : {recipe.calories}</p>
            </div>
        })}
    </div>
    )}

export default Recipes;