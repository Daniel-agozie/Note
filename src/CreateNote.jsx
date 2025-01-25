import React, {useContext} from 'react'
import { AddContext } from './context/ContextProvider';
import {v4 as uuidv4} from "uuid";

const CreateNote = () => {
  const {holdNote,handleDelete} = useContext(AddContext);

  return (
    <div className='mt-5 ml-3 p-4 gap-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mr-4'>
      {holdNote.map((hold,index) => {
        return(
          <div className='border-2 p-3 break-words relative w-64 h-32 overflow-y-scroll scrollbar-hide shadow-lg ' key={index} id={index}>
            <div>{hold.title}</div>
            <div>{hold.content}</div>

              <button className='absolute text-yellow-600 w-11 h-11 rounded-full text-xs font-montserrat font-bold outline-none' onClick={() => (
                handleDelete(hold)
              )}>Delete</button>


          </div>  
        )
      })}
    </div>
  )
}

export default CreateNote;