import React from 'react'
import Navbar from './navbar'
import loki from "../assets/images/loki.jpg"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

 const Details = () => {
    const {idPic}=useParams();
    const [job, setJob] = useState(null);
    const[loading ,setLoading]=useState(true)
    useEffect(() => {
        const fetchJob = async () => {
            
            try {
                const res = await fetch(`http://localhost:8000/jobs`);
                const data = await res.json();
                console.log(data);
                setJob(data);
            } catch (error) {
                console.log('Error fetching data', error)
            } finally {

                setLoading(true);
            }


        };
        fetchJob();
    }, []);
    return (
            loading ?  <h3>{idPic}</h3>: <h1>themba</h1>
        // <div>
        //     <Navbar title="Dont think about it too much"></Navbar>
        //      <div className='Content-container'>
        //         <div className='image-section'>
        //             <img className="movie-pic" src={loki} alt="" />
        //         </div>
        //         <div className='content-infor'>
        //             <div className='content'>
        //                 <h2 className='content-title'>
        //                     {job.id} 
        //                 </h2>
        //                 <h3 className='about-content'>
        //                      {job.id} 
        //                 </h3>
        //                 <div className='details'>
        //                     <p>Country:{ }</p>
        //                     <p>Genre:{ }</p>
        //                     <p>Year:{ }</p>
        //                     <p>Type:{ }</p>
        //                 </div>
        //             </div>
        //         </div> 

        //     </div> 
        //     <div className='btn'>
        //         <button className='btm-btn'>EDIT</button>
        //         <button className='btm-btn'>DELETE</button>
        //     </div>
        // </div>



    )



}

export default Details
