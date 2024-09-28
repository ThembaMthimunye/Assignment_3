import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  function goToMovies() {
    return navigate("/Movies");
  }

  function goToSeries() {
    return navigate("/Series");
  }

  function goToHome() {
    return navigate("/home");
  }
  return (
    <footer className="bg-[#D9D9D9] py-8 mt-[5rem]">
      <div className=" flex justify-around text-[13px] md:text-xl lg:text-2xl">
        <h5 onClick={goToHome} className="hover:text-white hover:scale-110">
          Enter-Stream
        </h5>
        <h5 onClick={goToMovies} className="hover:text-white hover:scale-110">
          Movies
        </h5>
        <h5 onClick={goToSeries} className="hover:text-white hover:scale-110">
          Series 
        </h5>
        <h5 onClick={goToHome} className="hover:text-white hover:scale-110">
          Subscribe
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
