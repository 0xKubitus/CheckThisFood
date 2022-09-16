import React from 'react'

const ShowRecipe = (props) => {
  
  return (
    <div>
       
       

        <h1>{props.attributes.comments}</h1>
        <h1>{props.attributes.title}</h1>
        
        
        <img src={props.attributes.image_url} width={300}></img>
        <p>{props.attributes.description}</p>
        <p>Glucides : {props.attributes.carbohydrates}</p>
                        <p>Calories : {props.attributes.calories}</p>

                        <p>{props.comments.map((props => props.content))}</p>
    </div>
  )
}

export default ShowRecipe