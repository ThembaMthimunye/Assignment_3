
import Navbar from './navbar'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';



const isHome = false;
const Movies = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function goToAdd() {
    return (
      navigate(`/AddContent`)
    )
  };
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
  return (
    <div>
      <Navbar title="Latest Movies" />
      <div>
        <button class="px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-[105rem] mt-[3rem]" onClick={goToAdd}>ADD</button>
      </div>
      <div >
        <h1 class="text-[1.5rem] text-center text-[Black] p-[2rem] font-Inter">LATEST MOVIES</h1>

        <div class="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr] gap-5 mx-40">
          {
            loading ? (<h2>loading</h2>
            ) : (

              jobs.map((Images) => {
                return (

                  <div className='images_container'>
                    <a href="">
                      <img class="w-[70%] aspect-[1/1] border m-8 rounded-[3px] border-solid border-[black]" src={Images.image} alt="" />
                    </a>
                  </div>

                )
              }))
          }
        </div>
      </div>
          <Footer></Footer>
    </div>
  )
}

export default Movies
