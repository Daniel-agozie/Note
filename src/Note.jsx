import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';

const Note = (props) => {
  const date = dayjs()
  const today = date.format('ddd, MM D')

  function handleClick() {
    props.onDelete(props.id)
  }
   
  return (
    <div className="border w-56 h-20 mt-8 ml-3 relative shadow-xl shadow-gray-300">
      <div className="ml-2 mt-2 font-oswald text-sm">
        <div>{props.title}</div>
        <div>{props.content}</div>
        <div className='italic font-bold flex justify-center'>{today}
        </div>
        <button className="text-yellow-600 w-11 h-11 rounded-full absolute -bottom-2 right-2 text-xs font-montserrat font-bold outline-none" onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </div>

  )
}

export default Note;