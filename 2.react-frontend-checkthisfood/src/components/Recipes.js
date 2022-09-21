import React from 'react';
import {Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'api/axios';
import Home from '../pages/Home/Home';

const Recipes = ({title, description, carbohydrates, calories, image, id}) => {



    return (

        <div>
                       <h2> {title} </h2>
                        <img src={image} width={300}></img> 
                        <p>{description}</p>
                        <p>Glucides : {carbohydrates}</p>
                        <p>Calories : {calories}</p> 
                        
                       <Link to={`recipes/${id}`}>voir</Link> 
                        
                    </div>
                );}

     
 
export default Recipes;
