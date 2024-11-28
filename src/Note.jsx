import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {

  function handleClick() {
    props.onDelete(props.id)
  }
   
  return (
    <div className="border w-56 h-20 mt-8 ml-3 relative shadow-xl shadow-gray-300">
      <div className="ml-2 mt-2 font-montserrat text-sm">
        <div>{props.title}</div>
        <div>{props.content}</div>
        <button className="text-yellow-600 w-11 h-11 rounded-full absolute -bottom-2 right-2 text-xs font-montserrat font-bold outline-none" onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>

  )
}

export default Note;