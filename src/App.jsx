import Header from "./Header"
import CreateArea from "./CreateArea"
import Footer from "./Footer"
import Note from "./Note"

const App = () => {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note title="Note Title" content="Note Content"/>
      <Footer />
    </div>
  )
}

export default App