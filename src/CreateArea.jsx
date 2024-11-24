

const CreateArea = () => {
  return (
    <div className="pt-20 flex justify-center ">
        <form className="border flex flex-col px-10 py-3 font-montserrat text-sm relative shadow-lg shadow-slate-400">
          <input className="outline-none" type="text" placeholder="Title"/>
          <textarea className="outline-none resize-none overflow-hidden" placeholder="Take a Note..."/>
          <button className="bg-yellow-500 rounded-full w-8 h-8 absolute -bottom-4 right-2 text-xs font-bold">Add</button>
        </form>
    </div>
  )
}

export default CreateArea;