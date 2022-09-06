import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  SharedLayout,
  Document,
  Documents
} from './views/SharedLayout'
import FourOFour from './views/404'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Documents/>}/>
        <Route path='documents/:id' element={<Document/>}/>
      </Route>
      <Route path="*" element={<FourOFour/>}></Route>
    </Routes>
  </BrowserRouter>
}

export default App;


//Home
  //Header
    //Create Doc
  //Default Route - List of docs
    //When click on doc in list
      //Doc edit

