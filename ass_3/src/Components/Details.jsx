import React from "react";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import Footer from "./Footer";

const Details = ({ deleteContent }) => {
  const { idPic } = useParams();
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${idPic}`);
        const data = await res.json();
        console.log(data);
        setJob(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, []);
  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("Are you sure");
    if (!confirm) return;
    deleteContent(jobId);
    navigate("/Movies");
  };

  function goToEdit() {
    return navigate("/AddContent");
  }
  return (
    <>
      <div>
        <Navbar title={job.title}></Navbar>
        <div class=" " key={job.id}>
          <h1 class="text-4xl font-bold text-gray-800 font-sans-serif text-center my-[3rem] underline">
            {job.title}
          </h1>
          <div className="grid lg:grid-cols-2">
            <div class="mb-[-10rem] flex justify-center ">
              <img class="h-[50vh] w-[50vh] " src={job.image} alt="" />
            </div>
            <div class="text-[13px] lg:text-xl flex justify-center mt-[10rem] lg:-mt-10">
              <div className="pl-10 md:pl-[10rem] lg:pl-0">
                <h3 class=" my-10 pr-10 md:pr-[10rem] lg:pl-0 ">{job.description}</h3>
                <div class=" ">
                  <p>Country:{job.country}</p>
                  <p>Genre:{job.genre}</p>
                  <p>Year:{job.year}</p>
                  <p>Type:{job.type}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-[2rem] flex pl-10 md:pl-[10rem] lg:justify-center gap-3">
          <button onClick={()=>goToEdit(job.id)} class="px-2 py-1 text-[13px] lg:px-4 lg:py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300  ">
            EDIT
          </button>
          <button
            class="px-2 py-1 text-[13px] lg:px-4 lg:py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300  "
            onClick={() => onDeleteClick(job.id)}
          >
            DELETE
          </button>
        </div>
      <Footer/>
      </div>
    </>
  );

  const loader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
  };
};

export default Details;
