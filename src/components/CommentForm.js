import React from 'react'

const CommentForm = (props) => {
  return (
    <div>
     <h3>laissez un commentaire pour {props.attributes.title}</h3>
        <form onSubmit={props.handleSubmit}>
            <label>Tapez votre commentaire</label>
            <input onChange={props.handleChange} value={props.comment.content} type="text" name="content" placeholder='tapez votre commentaire'></input>
            <button type='submit'>Envoyer</button>
        </form>
    </div>
  )
}

export default CommentForm