import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ title }) => {
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
    // <div class="bg-[url('./src/assets/images/nav-image.png')]  bg-cover bg-no-repeat bg-center h-[30rem] w-full" >

    //   <div class="">
    //     <a href="" class="underline text-[2rem] text-[white] m-16 ">Enter Stream</a>
    //     <a  href="" class="text-[2rem] text-[white] ml-[30rem]">Movies</a>
    //     <a  href="" class="text-[2rem] text-[white] ml-8">Series</a>
    //     <button class="px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-[40rem]">Subscribe</button>
    //     <h2 class="text-5xl text-[white] ml-[47rem] mt-40">{title}</h2>
    //   </div>

    // </div>
    <nav className="bg-[url('./src/assets/images/nav-image.png')] bg-cover bg-no-repeat bg-center text-white  text-[13px] h-[40vh] lg:h-[70vh]  md:text-xl lg:text-4xl">
      <div className="flex justify-around pt-10 ">
        <a onClick={goToHome} className="underline font-semibold" href="">
          Enter Stream
        </a>
        <div className="md:space-x-5 space-x-2">
          <a onClick={goToMovies} className="font-semibold" href="">
            Movies
          </a>
          <a onClick={goToSeries} className="font-semibold" href="">
            Series
          </a>
        </div>

        <a
          className="px-1 lg:px-4 lg:py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 "
          href=""
        >
          Subscribe
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
