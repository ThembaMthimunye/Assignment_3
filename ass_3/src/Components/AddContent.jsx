import React from 'react'
import Navbar from './navbar'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const AddContent = ({ addContentSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(description)
    const newContent = {
      title,
      description,
      country,
      year,
      genre,
      type,
      image,



    };
    addContentSubmit(newContent);

    return navigate('/home')
  };

  const uploadImage = async (e) => {

    const file = e.target.files[0];
    console.log(image);
  };
  const hSet = (e) => {
    const f = e.target.files[0];
    if (f) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(f)
      console.log(image);
    }

  }


  return (
    <div>
      <Navbar title='ADD A MOVIE/SERIES'></Navbar>
      
      


      <form onSubmit={submitForm}>
        <div className='grid px-1 md:grid-cols-2'>
          <div className='bg-[#D9D9D9] w-[15rem] md:w-[20rem] md:h-[20rem] mt-[3rem] flex justify-center  mx-auto'>
            <input className='md:mt-[8rem] ' type="file" onChange={hSet}
            />
          </div>

          <div className=' mt-[3rem]'>
            <div className="mb-4">
              <label for="name" className="block text-gray-700 font-medium mb-2">Movie/ Series name </label>
              <input value={title}
                onChange={(e) => setTitle(e.target.value)} type="text" id="name" name="name" className="w-[317px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
            </div>
            <div className="mb-4">
              <label for="" className="block text-gray-700 font-medium mb-2">Description </label>
              <input value={description}
                onChange={(e) => setDescription(e.target.value)} type="" id="" name="" className="w-[317px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
            </div>
            <div className="mb-4">
              <label for="message" className="block text-gray-700 font-medium mb-2">Country </label>
              <textarea value={country}
                onChange={(e) => setCountry(e.target.value)} id="message" name="message" rows="4" className="w-[317px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <div className="mb-4">
              <label for="" className="block text-gray-700 font-medium mb-2">Year</label>
              <input value={year}
                onChange={(e) => setYear(e.target.value)} type="" id="" name="" className="w-[317px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
            </div>
            <div className="mb-4">
              <label for="subject" className="block text-gray-700 font-medium mb-2">Genre</label>
              <select value={genre}
                onChange={(e) => setGenre(e.target.value)} id="subject" name="subject" className="w-[317px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="general">Movie</option>
                <option value="feedback">Series </option>

              </select>
            </div>
            <div>
              <button type="submit" className="w-[317px] px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ">SAVE</button>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>

    </div>
  )
}

export default AddContent
