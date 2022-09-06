import { useAppContext } from '../../context/appContext'
import { FaFileWord } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Documents = () => {
  const { setDocMode, setSelectedDoc,setSelectedMenuItem } = useAppContext()
  const navigate = useNavigate()

  const createNewDoc = () => {
    console.log("Creating new doc.")
    setDocMode('add')
    setSelectedDoc(null)
    setSelectedMenuItem('/documents/new')
    navigate('documents/new')
  }

  return <div>
    <h2>Documents List</h2>
    <button onClick={e=>createNewDoc()}><FaFileWord />Create New Doc</button>
  </div>
}

export default Documents