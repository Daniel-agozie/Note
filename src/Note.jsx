import React,{useContext, useState} from 'react'
import { AddContext } from './context/ContextProvider';
import {Zoom} from "@mui/material"

const Note = () => {
const  {note,handleChange,submitNote} = useContext(AddContext);

const [expand, setExpand] = useState(false)

const handleExpand = () =>{
  setExpand(true)
}

  return (
    <div className='pt-20 flex justify-center'>

      <form className='flex flex-col p-2 relative shadow-xl w-80' onSubmit={submitNote}>
        {expand && (
          <input type='text' placeholder='Write a note' className='outline-none text-center text-sm mt-5' value={note.title} name='title' onChange={handleChange}/>
        )}

        <textarea rows={expand ? '2' : '1'} placeholder='Write the context' className='resize-none outline-none text-center text-sm mt-2 scrollbar-hide' value={note.content} name='content' onChange={handleChange} onClick={handleExpand}/>

      <Zoom in={expand}>
        <button className="bg-yellow-500 rounded-full w-8 h-8 absolute -bottom-4 right-2 text-xs font-bold" > 
            Add
          </button>
      </Zoom>

      </form>

    </div>
  )
}

export default Note;