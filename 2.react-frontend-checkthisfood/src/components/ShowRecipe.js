import React from 'react'

const ShowRecipe = (props) => {
  
  return (
    <div>ShowRecipe
        <h1>{props.attributes.title}</h1>
        <img src={props.attributes.image_url} width={300}></img>
        <p>{props.attributes.description}</p>
        <p>Glucides : {props.attributes.carbohydrates}</p>
                        <p>Calories : {props.attributes.calories}</p>


    </div>
  )
}

export default ShowRecipe