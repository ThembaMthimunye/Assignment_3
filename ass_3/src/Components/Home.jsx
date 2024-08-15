
import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './navbar';
const isHome = false;
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';


const Home = () => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchJobs = async () => {
      const api = isHome ? '/api/jobs?_limit=4' : '/api/jobs?_limit';
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

  const navigate = useNavigate();

  function goToMovies(idPic) {
    return (
      navigate(`/Details/${idPic}`)
    )
  }


  function goToMoviesPage() {
    return (
      navigate(`/Movies`)
    )
  }

  function goToSeriesPage(idPic) {
    return (
      navigate(`/Series`)
    )
  }

  const img = jobs.slice(0, 8);
  return (

    <div>
      <Navbar />

      <div class="">
        <h1 class="text-[1.5rem] text-center text-[Black] p-[2rem] font-Inter">LATEST MOVIES</h1>

        <div class="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr] gap-5 mx-40">
          {
            loading ? (<h2>loading</h2>
            ) : (

              img.map((Images) => {
                return (

                  <div >
                    <a href="" onClick={
                      (e) => {
                        e.preventDefault();
                        goToMovies(Images.id)
                      }
                    }>
                      <img class="w-[70%] aspect-[1/1] border m-8 rounded-[3px] border-solid border-[black]" src={Images.image} alt="" />
                    </a>
                  </div>

                )
              }))
          }
        </div>
        <div>
          <button class="px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-[105rem]" onClick={goToMoviesPage}>
            More
          </button>
        </div>
      </div>

      <div className="main_container">
        <div className="pagetitle">
          <h1 class="text-[1.5rem] text-center text-[Black] p-[2rem] font-Inter">LATEST SERIES</h1>
        </div>
        <div className="grid-container">
          {
            img.map((Images) => {
              return (
                <div className='images_container'>
                  <a href="" onClick={
                    (e) => {
                      e.preventDefault();
                      goToMovies(Images.id)
                    }
                  }>

                    <img class="w-[70%] aspect-[1/1] border m-8 rounded-[3px] border-solid border-[black]" src={Images.image} alt="" />
                  </a>
                </div>
              )
            })
          }
        </div>
        <div>
          <button class="px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-[105rem]" onClick={goToSeriesPage}>
            More
          </button>
        </div>
      </div>
      <Footer></Footer>

    </div>


          
  )
}

export default Home

