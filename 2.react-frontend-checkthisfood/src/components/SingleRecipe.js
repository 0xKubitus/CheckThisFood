import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'api/axios';
import ShowRecipe from './ShowRecipe';

const SingleRecipe = (props) => {
    const Id = useParams();
    const [recipe, setRecipe] = useState({});

    const API_URL = `http://localhost:3001/recipes/${Id.id}`;

    useEffect(() => {
        axios.get(API_URL).then((resp) => setRecipe(resp.data));
    }, []);

    return (
        <div>
            {' '}
            <ShowRecipe attributes={recipe} />
        </div>
    );
};

export default SingleRecipe;
