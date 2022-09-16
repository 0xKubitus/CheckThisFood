import React from 'react';

const ShowRecipe = (props) => {
    const { title, description, carbohydrates, calories, image_url } = props.attributes;

    return (
        <div>
            <h1>{title}</h1>

            <img
                src={image_url}
                width={300}></img>
            <p>{description}</p>
            <h3>Informations nutritionnelles par partion : </h3>
            <p>Glucides : {carbohydrates} grammes</p>
            <p>Calories : {calories} kcal</p>

            <div>
                <h3>Commentaires : </h3>
            </div>
        </div>
    );
};

export default ShowRecipe;
