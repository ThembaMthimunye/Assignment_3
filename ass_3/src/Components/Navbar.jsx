import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({title}) => {
  const navigate = useNavigate();

  function goToMovies(){
    return(
      navigate('/Movies')
    )
  }

  function goToSeries(){
    return(
      navigate('/Series')
    )
  }

  function goToHome(){
    return(
      navigate('/home')
    )
  }
    
  return (
    <div className='nav-bar-container'>
        <div className="nav_items">
            <a onClick={goToHome}  href="" className="nav-buttons_1">Enter Stream</a>
            <a onClick={goToMovies} href="" className="nav-buttons_2">Movies</a>
            <a onClick={goToSeries} href="" className="nav-buttons_3">Series</a>
            <button className='proj-btn'>Subscribe</button>
            <h2 className='Section-Header'>{title}</h2>
        </div>
      
    </div>
  )
}

export default Navbar
