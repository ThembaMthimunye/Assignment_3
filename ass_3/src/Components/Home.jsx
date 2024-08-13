// import React from 'react'
// import Images from "../Components/images.json"
// import Navbar from '../Components/navbar';

// const Home = () => {
//   const img=Images.slice(0,4);
//   return (



//     <div>
//       <Navbar/>

//       <div className="main_container">
//         <div className="pagetitle">
//           <h1 className='Section-Header-Home'>Latest Movies</h1>
//         </div>
//         <div className="grid-container">
//           {
//             img.map((Images) => {
//               return (
//                 <div className='images_container'>
//                   <img className='images' src={Images.image} alt="" />
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>

//       <div className="main_container">
//         <div className="Section-Header-Home">
//           <h1>Latest Series</h1>
//         </div>
//         <div className="grid-container">
//           {
//             img.map((Images) => {
//               return (
//                 <div className='images_container'>
//                   <img className='images' src={Images.image} alt="" />
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>


//     </div>



//   )
// }

// export default Home


import React from 'react'
// import Images from "../images.json"
import { useState, useEffect } from 'react';
import Navbar from './navbar';
const isHome=false;
import { Link } from 'react-router-dom';
import Details from './details';
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // const img = Images.slice(0, 4);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    
    const fetchJobs = async () => {
      const api=isHome? '/api/jobs?_limit=4':'/api/jobs?_limit';
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

  function goToMovies(idPic){
    return(
      navigate(`/Details/${idPic}`)
    )
  }
  return (

    <div>
      <Navbar />

      <div className="main_container">
        <h1 className='Section-Header-Home'>Latest Movies</h1>

        <div className="grid-container">
          {
            loading ? (<h2>loading</h2>
            ) : (

              jobs.map((Images) => {
                return (

                  <div className='images_container'>
                    <a href="" onClick={
                      (e) => {
                        e.preventDefault();
                        goToMovies(Images.id)
                      }
                    }>
                      <img className='images' src={Images.image} alt="" />
                    </a>
                  </div>

                )
              }))
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

