import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Movies from "./Components/Movies"
import Series from "./Components/Series"
import Home from './Components/Home'
import Details  from './Components/details'
import AddContent from './Components/AddContent'




function App() {
//Add Movie or Series 
  const addContent=async(newContent)=>{
    const res=await fetch ('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newContent),
    });
    return;
  };


// Delete Movie Or Series
const deleteContent=async (id)=>{
  const res=await fetch (`/api/jobs/${id}`,{
    method:'DELETE',
  });


  return;
}
  return (
    <>
      <BrowserRouter>
        <Routes>

            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/Movies" element={<Movies/>}/>
            <Route path="/Series" element={<Series/>}/> 
            {/* <Route path="/Details"element={<Details/>}/> */}
             <Route path="/Details/:idPic"element={<Details deleteContent={deleteContent}/>} /> 
            <Route path="/AddContent"element={<AddContent addContentSubmit={addContent}/>}/>
        </Routes>
      </BrowserRouter> 
    

    </>
  )
}

export default App
