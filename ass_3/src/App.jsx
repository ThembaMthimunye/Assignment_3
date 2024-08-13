import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from "./Components/navbar"
import Movies from "./Components/Movies"
import Series from "./Components/Series"
import Footer from "./Components/Footer"
import More from "./Components/More"
import Home from './Components/Home'
import Details from './Components/details'
import AddContent from './Components/AddContent'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/Movies" element={<Movies/>}/>
            <Route path="/Series" element={<Series/>}/>
            <Route path="/Details"element={<Details/>}/> 
            <Route path="/Details/:idPic"element={<Details/>}/> 
            <Route path="/AddContent"element={<AddContent/>}/>
        </Routes>
      </BrowserRouter> 
      
      
    </>
  )
}

export default App
