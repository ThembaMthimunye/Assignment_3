import Navbar from "./navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Spinner from "./Spinner";

const isHome = false;
const Movies = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  function goToAdd() {
    return navigate(`/AddContent`);
  }
  //////////////////////////////////////////
  // const [jobs, setJobs] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const api = isHome ? "/api/jobs?_limit=4" : "/api/jobs?_limit";
      try {
        const res = await fetch(api);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // const navigate = useNavigate();

  function goToMovies(idPic) {
    return navigate(`/Details/${idPic}`);
  }

  function goToMoviesPage() {
    return navigate(`/Movies`);
  }

  function goToSeriesPage(idPic) {
    return navigate(`/Series`);
  }

  useEffect(() => {
    const fetchJobs = async () => {
      const api = isHome ? "/api/jobs?_limit=4" : "/api/jobs?_limit";
      try {
        const res = await fetch(api);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  return (
    <div>
      <Navbar title="Latest Movies" />
      <div>
        <button
          class=" mt-7 lg:text-2xl px-2 py-1 lg:px-4 lg:py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-10 md:ml-[90%]"
          onClick={goToAdd}
        >
          ADD
        </button>
      </div>
      <div>
        <h1 class="text-[1.5rem] md:text-4xl text-center text-[Black] p-[2rem] font-Inter">
          LATEST MOVIES
        </h1>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            <Spinner />
          ) : (
            jobs.map((Images) => {
              return (
                <div>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      goToMovies(Images.id);
                    }}
                  >
                    <img
                      class="w-[70%] aspect-[1/1] border m-8 rounded-[3px] border-solid border-[black] hover:scale-110 duration-300"
                      src={Images.image}
                      alt=""
                    />
                  </a>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Movies;
