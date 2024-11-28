import { useState } from "react"
import Header from "./Header"
import CreateArea from "./CreateArea"
import Footer from "./Footer"
import Note from "./Note"

const App = () => {
  const [notes, setNotes] =useState([])

  const addNote = (note) => {
     setNotes(preNotes => {
     return [...preNotes, note]
    })
  }

  function deleteNote(id) {
    setNotes((preNotes) => {
     return preNotes.filter((notesItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((notesItem, index) => {
        return <Note key={index} id={index} title={notesItem.title} content={notesItem.content} onDelete={deleteNote}/>
      })}

      <Footer />
    </div>
  )
}

export default App