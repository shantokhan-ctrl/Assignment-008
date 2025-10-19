import React from 'react';
import Banner from '../../components/Banner/Banner';
import Application from '../Application/Application';
import { useLoaderData } from 'react-router';


const Home = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div>
           <Banner></Banner>
           <Application data={data}></Application>
           
        </div>
    );
};

export default Home;
