import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
const [expand, setExpand] = useState(false)
const [note, setNote] = useState({
    title:"",
    content:"",
});
const inputEvent = (event) =>{
    const {name, value} = event.target;

    setNote((prevData) =>{
        return {
            ...prevData,
            [name]: value
        }
    })
    console.log(note)
}

const addEvent = () =>{
    props.passNote(note);
    setNote({
        title:"",
        content:"",
    })
}
const expandIt = () =>{
    setExpand(true)
}
const btoNormal = () =>{
    setExpand(false)
}
    return (
       <>
        <div className ="main_note"  onDoubleClick ={btoNormal}>
        <form>
       {     expand ?
            <input type ="text" 
            name = "title"
            value ={note.title} 
            onChange ={inputEvent} 
            placeholder="Title" 
            autoComplete = "off" />:null}

            
            <textarea rows=""
            name="content"
            onClick = {expandIt}
             column = ""
              value ={note.content}
               onChange ={inputEvent}

                placeholder="Write a note..."/>
          {  expand ?
            <Button onClick = {addEvent}>
            <AddIcon className ="plus_sign" />
            </Button> :null}

        </form>

        </div>
       </>
    )
}

export default CreateNote
