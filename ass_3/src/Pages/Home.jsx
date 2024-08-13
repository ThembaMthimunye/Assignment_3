import React from 'react'
// import Images from "../images.json"
import { useState,useEffect } from 'react';
import Navbar from '../navbar';

const Home = () => {
  // const img = Images.slice(0, 4);
  const [jobs,setJobs]=useState([]);
  const [loading,setLoading]=useState(true);


  useEffect(()=>{
    const fetchJobs=async()=>{
      try {
        const res = await fetch('http://localhost:8000');
        const data = await res.json();
        setJobs(data);
      } catch(error){
        console.log('Error fetching data', error)
      }
      
    }

  },[]);
  return (

    <div>
      <Navbar />

      <div className="main_container">
        <div className="pagetitle">
          <h1 className='Section-Header'>Latest Movies</h1>
        </div>
        <div className="grid-container">
          {
            jobs.map((Images) => {
              return (
                <div className='images_container'>
                  <a href="">
                    <img className='images' src={Images.image} alt="" />
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="main_container">
        <div className="pagetitle">
          <h1 className='Section-Header-Home'>Latest Series</h1>
        </div>
        <div className="grid-container">
          {
            jobs.map((Images) => {
              return (
                <div className='images_container'>
                  <a href="">
                    <img className='images' src={Images.image} alt="" />
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>


    </div>



  )
}

export default Home
