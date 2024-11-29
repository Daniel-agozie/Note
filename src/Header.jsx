import LayersClearIcon from '@mui/icons-material/LayersClear';

const Header = () => {
  return (
    <div className="bg-yellow-500 p-4 z-10 fixed top-0 right-0 left-0">
      <div className="ml-2 font-montserrat font-bold text-white"><LayersClearIcon /> Keeper</div>
    </div>
  )
}

export default Header