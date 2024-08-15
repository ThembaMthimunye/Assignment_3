import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({ title }) => {
  const navigate = useNavigate();

  function goToMovies() {
    return (
      navigate('/Movies')
    )
  }

  function goToSeries() {
    return (
      navigate('/Series')
    )
  }

  function goToHome() {
    return (
      navigate('/home')
    )
  }

  return (
    
      <div class="bg-[url('./src/assets/images/nav-image.png')]  bg-cover bg-no-repeat bg-center h-[30rem] w-full" >


        <div class="">
          <a onClick={goToHome} href="" class="underline text-[2rem] text-[white] m-16 ">Enter Stream</a>
          <a onClick={goToMovies} href="" class="text-[2rem] text-[white] ml-[30rem]">Movies</a>
          <a onClick={goToSeries} href="" class="text-[2rem] text-[white] ml-8">Series</a>
          <button class="px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-[40rem]">Subscribe</button>
          <h2 class="text-5xl text-[white] ml-[47rem] mt-40">{title}</h2>
        </div>

      </div>
    

  )
}

export default Navbar
