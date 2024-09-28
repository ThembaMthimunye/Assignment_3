import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
const isHome = false;
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Spinner from "./Spinner";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const navigate = useNavigate();

  function goToMovies(idPic) {
    return navigate(`/Details/${idPic}`);
  }

  function goToMoviesPage() {
    return navigate(`/Movies`);
  }

  function goToSeriesPage(idPic) {
    return navigate(`/Series`);
  }

  const img = jobs.slice(0, 8);
  return (
    <div className="bg-[conic-gradient(var(--tw-gradient-stops))] from-indigo-600 via-indigo-400 to-indigo-200">
      <Navbar />

      <div className="">
        <h1 className="text-[1.5rem] text-center text-[Black] p-[2rem] font-Inter">
          LATEST MOVIES
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            <Spinner />
          ) : (
            img.map((Images) => {
              return (
                <div key={Images.id}>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      goToMovies(Images.id);
                    }}
                  >
                    <img
                      className="w-[70%] aspect-[1/1] border m-8 rounded-[3px] border-solid border-[black] hover:scale-110"
                      src={Images.image}
                      alt=""
                    />
                  </a>
                </div>
              );
            })
          )}
        </div>
        <div>
          <button
            className="px-2 py-1 lg:px-4 lg:py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-10 md:ml-[90%]"
            onClick={goToMoviesPage}
          >
            More
          </button>
        </div>
      </div>

      <div className="main_container">
        <div className="pagetitle">
          <h1 className="text-[1.5rem] text-center text-[Black] p-[2rem] font-Inter">
            LATEST SERIES
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {img.map((Images) => {
            return (
              <div key={Images.id} className="">
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    goToMovies(Images.id);
                  }}
                >
                  <img
                    className="w-[70%] aspect-[1/1] border m-8 rounded-[3px] border-solid border-[black] hover:scale-110"
                    src={Images.image}
                    alt=""
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div>
          <button
            className="px-2 py-1 lg:px-4 lg:py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-10 md:ml-[90%]"
            onClick={goToSeriesPage}
          >
            More
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
