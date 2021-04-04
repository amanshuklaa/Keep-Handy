import React, {useState , useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import BurstModeIcon from '@material-ui/icons/BurstMode';
import {useDropzone} from 'react-dropzone';
import { IconButton } from '@material-ui/core';


const CreateNote = (props) => {
const [expand, setExpand] = useState(false)
const [image, setImage] = useState('')
const [note, setNote] = useState({
    title:"",
    content:"",
    image:"",
});
const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: 'image/jpeg, image/png',
    maxFiles:1,
    noDrag:true,
  });

  useEffect(() =>{
    const reader = new FileReader();
    const file  = acceptedFiles[0]
    if(file){
        reader.onloadend = () => {
            // log to console
            // logs data:<type>;base64,wL2dvYWwgbW9yZ...
            setImage(reader.result)
            setNote((oldData) =>{
                return {...oldData,image:reader.result}
            })
          };
        reader.readAsDataURL(file)
    }
  },[acceptedFiles])

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
        image:"",
    })
    setImage('')
}
const expandIt = () =>{
    setExpand(true)
}
const btoNormal = () =>{
    setExpand(false)
}



const handleChange = (event) =>{
    const reader = new FileReader();
    const file  = event.target.files[0]
    if(file){
        reader.onloadend = () => {
            // log to console
            // logs data:<type>;base64,wL2dvYWwgbW9yZ...
            setImage(reader.result)
            setNote((oldData) =>{
                return {...oldData,image:reader.result}
            })
          };
        reader.readAsDataURL(file)
    } 
}
    return (
       <>
        <div className ="main_note"  onDoubleClick ={btoNormal}>
        <form>
       {     expand &&
            <input type ="text" 
            name = "title"
            value ={note.title} 
            onChange ={inputEvent} 
            placeholder="Title" 
            autoComplete = "off" />}

            
            <textarea rows=""
            name="content"
            onClick = {expandIt}
             column = ""
              value ={note.content}
               onChange ={inputEvent}

                placeholder="Write a note..."/>

            {/* <input type="file" onChange={handleChange} value = ""/> */}

        
        
        <div {...getRootProps({className: 'dropzone fileupload'})}>
        <input {...getInputProps()} />

    {   expand &&
     <IconButton type="button" onClick={open}>
        <BurstModeIcon className = "uploadfileicon" />

        </IconButton>}
      </div>

            { image&&
            <img src = {image} ></img>}
          {  expand &&
            <Button onClick = {addEvent}>
            <AddIcon className ="plus_sign" />
            </Button>}

        </form>

        </div>
       </>
    )
}

export default CreateNote
