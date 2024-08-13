import React from 'react'
import Navbar from './navbar'

const AddContent = () => {
  return (
    <div>
      <Navbar title='ADD A MOVIE/SERIES'></Navbar>
      <div>
        <p>Movies/Series name</p>
        <input type="text" />
        <p>Description</p>
        <input type="text" />
        <p>Country</p>
        <input type="text" />
        <p>Year</p>
        <input type="text" />
      </div>
    </div>
  )
}

export default AddContent
