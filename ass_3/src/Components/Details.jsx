import React from 'react'
import Navbar from './navbar'
import { useState, useEffect } from 'react'
import { useParams,useNavigate,useLoaderData } from 'react-router-dom'


 const Details = ({deleteContent}) => {
    const {idPic}=useParams();
    const [job, setJob] = useState([]);
    const[loading ,setLoading]=useState(true);
    const navigate=useNavigate();
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
    const onDeleteClick=(jobId)=>{
        const confirm =window.confirm('Are you sure');
        if (!confirm) return;
        deleteContent(jobId);
        navigate('/Movies');

    }
    return  (
         <>
        
         <div>
              <Navbar title={job.title}></Navbar> 
              <div class='flex'key={job.id}>
                 <div class='mb-[-10rem]'>
                     <img class="h-[30rem] w-80 ml-[30rem] mt-[10rem]" src={job.image} alt="" />
                 </div>
                 <div class=''>
                     <div className='content'>
                         <h1 class="text-4xl font-bold text-gray-800 font-sans-serif text-center mt-[8rem]" >
                         {job.title}
                         </h1>
                         <h3 class="pl-[25rem] pr-[25rem] pt-[3rem]" >
                              {job.description}
                         </h3>
                          <div class='ml-[25rem] mt-[2rem]'>
                             <p>Country:{job.country }</p>
                             <p>Genre:{job.genre }</p>
                             <p>Year:{ job.year}</p>
                             <p>Type:{ job.type}</p>
                         </div> 
                     </div>
                 </div> 

             </div> 
             <div class='mt-[1rem]'>
                 <button class='px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-[55rem]'>EDIT</button>
                 <button class='px-4 py-2 bg-[#7379FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-[2rem]' onClick={()=>onDeleteClick(job.id)}>DELETE</button>
             </div>
         </div>
         </>



    )


    const loader=async({params})=>{
        const res=await fetch (`/api/jobs/${params.id}`);
        const data=await res.json();
        return data

    }
};

export default Details
