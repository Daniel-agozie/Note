import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from "@mui/material";
import {Fab} from "@mui/material";

const CreateArea = (props) => {
  const [note, setNote] =useState({
    title : "",
    content : ""
  })

  const [isExpand, setExpand] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target

    setNote(prevNote => {
      return {...prevNote,
        [name] : value
      }
    })

  }

  const submitNote = (event) => {
    props.onAdd(note)
    
    setNote({
      title : "",
      content : ""
    })
    event.preventDefault();
  }

  function handleExpand() {
    setExpand(true)
  }

  return (
    <div className="flex justify-center mt-3 pt-20 ">
        <form className="border flex flex-col px-10 py-3 font-montserrat text-sm relative shadow-lg shadow-slate-400 w-80">
          {isExpand && <input className="outline-none" type="text" placeholder="Title" name="title" value={note.title} onChange={handleChange}/>}

          <textarea className="outline-none resize-none overflow-hidden" placeholder="Take a Note ..." name="content" value={note.content} onChange={handleChange} rows={isExpand ? '2' : '1'} onClick={handleExpand}/>

        <Zoom in={isExpand}>
          <button className="bg-yellow-500 rounded-full w-8 h-8 absolute -bottom-4 right-2 text-xs font-bold" onClick={submitNote} >
            <AddIcon />
          </button>
        </Zoom>

        </form>
    </div>
  )
}

export default CreateArea;