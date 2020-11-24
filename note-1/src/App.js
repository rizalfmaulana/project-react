import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Note from './component/Note';

import Time from './component/Time';
import CreateArea from './component/CreateArea';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState ([])

  function addNote(newNote){
    setNotes((prevValue)=>{
      return [...prevValue, newNote]
    })
  }

  function deleteNote(id){
    setNotes((prevValue)=>{
      return prevValue.filter((noteItem, index)=>{
        return index !==id;
      })
    })
  }

  return (
    <>
    <Header/>
    <CreateArea onAdd={addNote}/>
    {notes.map((noteItem, index)=>{
      return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
    })}
    {/* <Time/> */}
    <Footer/>
    </>
  );
}

export default App;
