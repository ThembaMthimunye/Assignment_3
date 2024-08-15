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
      {/* <form onSubmit={submitForm}>
        <div>
        <div>

          <div>
            <input type="file"  onChange={hSet}
            />
          </div> 

            <p class="block text-gray-700 font-medium mb-2">Title</p>
            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              class="w-[10rem] h-[1.5rem] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            </textarea>
          </div>

          <div>
            <p class="block text-gray-700 font-medium mb-2">Description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
            </textarea>
          </div>

          <div>
            <p class="block text-gray-700 font-medium mb-2">Country</p>
            <textarea
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
            </textarea>
          </div>

          <div>
            <p class="block text-gray-700 font-medium mb-2">Genre</p>
            <textarea
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
            </textarea>
          </div>

          <div>
            <p class="block text-gray-700 font-medium mb-2">Year</p>
            <textarea
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
            </textarea>
          </div>

          <div>
            <select name="" id=""
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Movies">Movies</option>
              <option value="Series">Series</option>
            </select>
          </div>
          <button>Save</button>

        </div>

      </form> */}


      <form onSubmit={submitForm}>
        <div class='flex'>
          <div class='bg-[#D9D9D9] w-[20rem] h-[20rem] ml-[35rem] mt-[3rem]'   >
            <input class='mt-[8rem] ml-[2rem]' type="file" onChange={hSet}
            />
          </div>

          <div class='ml-[5rem] mt-[3rem]'>
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">Movie/ Series name </label>
              <input value={title}
                onChange={(e) => setTitle(e.target.value)} type="text" id="name" name="name" class="w-[317px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-medium mb-2">Description </label>
              <input value={description}
                onChange={(e) => setDescription(e.target.value)} type="email" id="email" name="email" class="w-[317px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700 font-medium mb-2">Country </label>
              <textarea value={country}
                onChange={(e) => setCountry(e.target.value)} id="message" name="message" rows="4" class="w-[317px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-medium mb-2">Year</label>
              <input value={year}
                onChange={(e) => setYear(e.target.value)} type="email" id="email" name="email" class="w-[317px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></input>
            </div>
            <div class="mb-4">
              <label for="subject" class="block text-gray-700 font-medium mb-2">Genre</label>
              <select value={genre}
                onChange={(e) => setGenre(e.target.value)} id="subject" name="subject" class="w-[317px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="general">Movie</option>
                <option value="feedback">Series </option>

              </select>
            </div>
            <div>
              <button type="submit" class="w-[317px] px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ">SAVE</button>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>

    </div>
  )
}

export default AddContent
