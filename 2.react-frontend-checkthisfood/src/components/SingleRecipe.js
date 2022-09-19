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
    const [comments, setComments] = useState({});
    const [loaded, setLoaded] = useState(false)
   

    useEffect(() => {

        const API_URL = `http://localhost:3001/recipes/${Id.id}`;
        axios.get(API_URL)
        .then(resp => {setRecipe(resp.data)
            
           
        setLoaded(true)
        
    })    
        .catch(resp => console.log(resp))
       
         // eslint-disable-next-line
    }, [])

    


    useEffect(() => {

        const API_URL = `http://localhost:3001/recipes/${Id.id}`;
        axios.get(API_URL)
        .then(resp => {setComments(resp.data.data.relationships)
            
        setLoaded(true)
    })    
        .catch(resp => console.log(resp))
         // eslint-disable-next-line
    }, [])

    console.log(recipe.included)
 

    return (
        <div>
            {loaded &&  
<ShowRecipe 
attributes={recipe.data.attributes}
/> 
}

{ loaded &&  
recipe.included.map((item => 

<Comments
title={item.attributes.content}
 />
))
           
}

<CommentForm/>

        </div>
    );
};

export default SingleRecipe;
