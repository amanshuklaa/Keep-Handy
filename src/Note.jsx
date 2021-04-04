import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    const deleteNote = () =>{
        props.deleteItem(props.id);
    }
    console.log(props)
    return (
        <div className="note">
             <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            
           {props.image &&
            <img src = {props.image} width = "100%" height ="100%"/>}
            <button className="btn" onClick = {deleteNote} >
            <DeleteOutlineIcon className="deleteIcon"  />
            </button>
           
            
        </div>
    )
}

export default Note
