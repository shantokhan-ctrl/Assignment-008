import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../utility/addToDB';
import Application from '../Application/Application';
import Applications from '../Applications/Applications';

const Install = () => {
    const [install,setInstall] =useState([])
    const data = useLoaderData();
    console.log(data);
    const [sort, setSort] =useState("")

    useEffect(()=> {
        
        const storedAppData = getStoredApp();
        // console.log(storedAppData)
        const ConvertedStoredApps = storedAppData.map(id => parseInt(id))
        console.log(ConvertedStoredApps)
        const myInstall = data.filter(app => ConvertedStoredApps.includes(app.id));
       setInstall(myInstall)
    },[])
 const handleSort = ( type) =>{
  setSort(type)
 }

    return (
      
        <div>
          
            <div>
            <p className=' grid justify-center items-center p-2' > <span className='font-bold text-4xl' >Your Installed Apps</span><br />
            <span className='text-gray-600'>Explore All Trending Apps on the Market developed by us</span></p>
            </div>
           <div>
             <div className='flex justify-between  p-6'>
              <span className='font-bold text-2xl p-2'>{install.length} Apps Found</span>
             <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sort By Size</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={() => handleSort("Low-High")}>Low-High</a></li>
    <li><a onClick={() => handleSort("High-Low")}>High-Low</a></li>
  </ul>
</div>
             </div >
             { 
               install.map(b=> <Applications  key={b.id} singleApp={b} > </Applications>) 
             }
           </div>
        </div>
    );
};

export default Install;