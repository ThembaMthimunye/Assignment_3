import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {


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
        <footer class="bg-[#D9D9D9] text- py-8 mt-[5rem]">
            <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between">

                <div class="mb-6 md:mb-0">
                    <h5 onClick={goToHome} class="text-lg  mb-2">Enter-Stream</h5>     
                </div>

                <div class="mb-6 md:mb-0">
                    <h5 onClick={goToMovies} class="text-lg  mb-2">Movies</h5>                 
                </div>

                <div>
                    <h5 onClick={goToSeries} class="text-lg  mb-2">Series</h5>
                </div>

                <div class="text-center mt-2">
                <h5 onClick={goToHome} class="text-lg  mb-2">SUBSCRIBE</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer
