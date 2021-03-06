import React , {useState} from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote  from './CreateNote'
import Note from './Note'

function App() {
const [addItem, setAddItem] = useState([]);
  const addNote = (note) =>{
   setAddItem((prevData) =>{
     return [...prevData,note];
   });
   

  }
  const onDelete = (id) =>{
    setAddItem((oldData) =>
      oldData.filter((currdata,index) =>{
          return index !== id;
      })
    )
  }

  return (
    <div className="App">
      <Header />
     
      <CreateNote passNote= {addNote} />
     { addItem.map((val,index)=>{
      
        return <Note
          key = {index}
          id = {index}
          title = {val.title}
          content = {val.content}
          image = {val.image}
          deleteItem = {onDelete}
        />
      })}

      <Footer />
    </div>
  );
}

export default App;
