import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'api/axios';
import ShowRecipe from './ShowRecipe';

const SingleRecipe = (props) => {
    const Id = useParams();
    const [recipe, setRecipe] = useState({});
    const [comments, setComments] = useState({});

    const API_URL = `http://localhost:3001/recipes/${Id.id}`;
    const API_URL_COMMENTS = `http://localhost:3001/recipes/${Id.id}/comments`;

    useEffect(() => {
        axios.get(API_URL).then((resp) => setRecipe(resp.data));
    }, []);

    useEffect(() => {
        axios.get(API_URL_COMMENTS).then((resp) => setComments(resp.data));
    }, []);



    return (
        <div>
            {' '}
            <ShowRecipe attributes={recipe} 
            comments= {comments}/>
        </div>
    );
};

export default SingleRecipe;
