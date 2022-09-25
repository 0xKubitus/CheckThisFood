import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CommentForm = (props) => {
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            
            <TextField onChange={props.handleChange} value={props.comment.content} type="text" name="content" placeholder='Votre commentaire'></TextField><br/>
            <Button variant='contained' style={{margin:"10px"}}type='submit'>Envoyer</Button>
        </form>
    </div>
  )
}

export default CommentForm