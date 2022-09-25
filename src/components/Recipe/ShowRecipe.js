import React from 'react';

const ShowRecipe = (props) => {
    const { title, description, carbohydrates, calories, image_url } = props.attributes;
    //    const {comment} = props.comments

    return (
        <div style={{ padding: '50px' }}>
            <h1 style={{ color: 'black' }}>{title}</h1>
            <br />
            <img src={image_url} alt="" width={300}></img>
            <h2 style={{ padding: '10px' }}>Ingrédients</h2>
            <p>{description}</p>
            <h3 style={{ padding: '10px' }}>Informations nutritionnelles par portion : </h3>
            <p>Glucides : {carbohydrates} grammes</p>
            <p>Calories : {calories} kcal</p>

            <div>
                <h3 style={{ padding: '10px' }}>Commentaires : </h3>
                {/* <p>{comment}</p> */}
            </div>
        </div>
    );
};

export default ShowRecipe;
