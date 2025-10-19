import React, { Suspense, useState } from 'react';
import Applications from '../Applications/Applications';
import { IoIosTrendingUp } from "react-icons/io";

const Application = ({data}) => {
    // const [allApps,setAllApps] = useState([]);
    // const appPromise = fetch('./allApps.json')
    // .then(res=>res.json())
    return (
        <div className='bg-[#D9D9D9]'>
           <div className='flex justify-center items-center '> 
            <p className=' font-bold text-4xl '> <span className='flex gap-5'>Trending Apps <span className='font-extrabold text-purple-600 text-6xl'><IoIosTrendingUp/></span></span>
              
                <span className='text-sm text-gray-500'>
                  Explore All Trending Apps on the Market developed by us
            </span></p>
           
          
            </div>
            <Suspense fallback={<span>loading....</span>}>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#D9D9D9] py-[80px] px-[80px]'>
             {
            data.map((singleApp)=><Applications key={singleApp.id} singleApp={singleApp}></Applications>)
           }
          </div>
            </Suspense>
        </div>
    );
};

export default Application;