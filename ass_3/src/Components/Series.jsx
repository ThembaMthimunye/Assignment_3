// import React from 'react'
// import Images from "./images.json"
import Navbar from './navbar'
import Add from './Add'
import { useState, useEffect } from 'react';
const isHome=false;

const Movies = () => {
   const [jobs, setJobs] = useState([]);
 const [loading, setLoading] = useState(true);


 useEffect(() => {
   
   const fetchJobs = async () => {
     const api=isHome? 'http://localhost:8000/jobs?_limit=4':'http://localhost:8000/jobs?_limit';
     try {
       const res = await fetch(api);
       const data = await res.json();
       setJobs(data);
     } catch (error) {
       console.log('Error fetching data', error)
     } finally {

       setLoading(false);
     }

   }
   fetchJobs();
 }, []);
 return (
     <div>
         <Navbar title="Latest Series" />
         <Add />
         <div className="main_container">
       <h1 className='Section-Header-Home'>Latest Series</h1>

       <div className="grid-container">
         {
           loading ? (<h2>loading</h2>
           ) : (

             jobs.map((Images) => {
               return (

                 <div className='images_container'>
                   <a href="">
                     <img className='images' src={Images.image} alt="" />
                   </a>
                 </div>

               )
             }))
         }
       </div>
     </div>

     </div>
 )
}

export default Movies
