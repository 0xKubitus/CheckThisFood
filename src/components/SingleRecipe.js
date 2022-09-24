import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'api/axios';
import ShowRecipe from './ShowRecipe';
import Comments from './Comments';
import CommentForm from './CommentForm';

const SingleRecipe = (props) => {
    const Id = useParams();
    const [recipe, setRecipe] = useState({});
    const [comment, setComment] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const API_URL = `http://localhost:3001/recipes/${Id.id}`;
        axios
            .get(API_URL)
            .then((resp) => {
                setRecipe(resp.data);

                setLoaded(true);
            })
            .catch((resp) => console.log(resp));

        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const API_URL = `http://localhost:3001/recipes/${Id.id}`;
        axios
            .get(API_URL)
            .then((resp) => {
                setComment(resp.data.data.relationships);

                setLoaded(true);
            })
            .catch((resp) => console.log(resp));
        // eslint-disable-next-line
    }, []);

    const handleChange = (e) => {
        e.preventDefault();

        setComment(Object.assign({}, comment.data, { [e.target.name]: e.target.value }));
        console.log('comment', comment);
    };

    const handleSubmit = (e) => {
        const recipe_id = recipe.data.id;
        console.log(recipe_id);
        console.log(comment);
        axios
            .post('http://localhost:3001/comments/', { comment, recipe_id })
            .then((resp) => {
                // const included = [...recipe.included, resp.data]
                // setRecipe({recipe, included})
                // setComment({})
            })
            .catch((resp) => {});
    };

    return (
        <div>
            {loaded && <ShowRecipe attributes={recipe.data.attributes} />}

            {loaded && recipe.included.map((item) => <Comments title={item.attributes.content} />)}
            {loaded && <CommentForm handleChange={handleChange} handleSubmit={handleSubmit} attributes={recipe.data.attributes} comment={comment} />}
        </div>
    );
};

export default SingleRecipe;
