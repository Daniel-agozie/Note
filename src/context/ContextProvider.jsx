import React, { useState,createContext, useEffect } from 'react';
import {v4 as uuidv4} from "uuid";

export const AddContext = createContext();

const ContextProvider = ({children}) => {  

  const [note,setNote] = useState({
    title : "",
    content : "",
  });
 
  const [holdNote, setHold] = useState([])

  const handleChange = (event) => {
    const {name,value} = event.target;

    setNote(preNote => {
      return {...preNote, 
        [name] : value
      }
    })
  };


  const addNote = (note) => {
    // const newNote = {...note,id:Date.now()}
    // const newNote = {...note, id: uuidv4()}
     const newNote = {...note, id: uuidv4()}
     console.log(newNote);
    setHold(preNote => {
      return [...preNote, newNote]
    })

    setNote({
      title : "",
      content : "",
    })
  }

  const deleteNote = (id) => {
    setHold((preNotes) => {
      return preNotes.filter((uuidv4) => {
        return uuidv4 !== id
      })
    })
  }

  const submitNote = (event) => {
    addNote(note)
    event.preventDefault();
  }

  const handleDelete = (id) => {
    deleteNote(id)
 }


  return (
    <div>
      <AddContext.Provider value={{note,handleChange,submitNote,holdNote,handleDelete}}>
        {children}
      </AddContext.Provider>
    </div>
  )
}

export default ContextProvider