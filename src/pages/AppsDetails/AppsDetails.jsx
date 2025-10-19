import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import RatingBarChart from '../RatingBarChart/RatingBarChart';
import { MdReviews } from "react-icons/md";
import { addToStoredDB } from '../../utility/addToDB';


const AppsDetails = () => {
    const {id}= useParams();
    const data =useLoaderData();
    // console.log(data)
    // const appId =parseInt(id);
    // console.log(appId)
    const singleApp = data.find(app => String(app.id)  === String(id) );
    const {image,title,companyName,downloads,ratingAvg,size,description,reviews} =singleApp;

   const handleInstall = id => {
//  to  store installed app

 
addToStoredDB(id)

   }

    return (
       
        <div className='bg-[#D9D9D9]'>
             <div className='flex  p-10 mx-auto gap-30'>
            <img className='w-3/12 shadow-lg rounded-2xl' src={image} alt="" />
             <div className=' p-10 w-full'>
                <h1 className='flex font-bold text-4xl'>{title} : {companyName} </h1>
                <br />
                
                <p className='font-semibold text-xl'>Developed by <span className='text-purple-600'>productive.io</span></p>
                <br />
            <div className='border'></div>
                <br />
                <div className='flex font-bold text-4xl gap-10'>
                    <span className='flex gap-5  '> {downloads} <span className='text-green-700'><LuDownload /></span> </span>
                <span className='flex gap-5'>   {ratingAvg} <span className=' text-blue-700'><FaStar /></span></span>
                <span className='flex gap-5 ' >{reviews} <span className='text-purple-600 text-4xl'><MdReviews /></span></span>
                </div> 
                <br />
                <button onClick={()=>handleInstall(id)} className="btn btn-success text-white font-bold text-xl p-8 ">Install Now ({size}) </button>
            </div>
            
            
        </div>
       <div>
                <span className='font-bold text-4xl p-4'>Ratings</span>
                <div>
                    <div className="rating-chart-section">
             <RatingBarChart></RatingBarChart>
    </div>
                    <h1 className='font-bold text-4xl p-4'>Description</h1>
                    <p className='p-4 text-gray-600'>{description}</p>
                </div>
            </div>
        </div>
       
    );
};

export default AppsDetails;