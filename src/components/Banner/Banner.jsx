import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import heroImage from "../../assets/hero.png"

const Banner = () => {
    return (
        <div>
            <section className="py-10 bg-[#D9D9D9]">
   
    <div className="container mx-auto px-4">
        
       
        <div className="text-center mb-12">
            <h1 className="text-5xl font-bold">We Build <br /> <span className='text-purple-800'>Productive</span> <span className='text-gray-600'>Apps</span></h1>
            <p className="mt-4 text-gray-800 max-w-2xl mx-auto p-4">
                At <span className='font-black'>HERO.IO</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='space-x-12 p-6'>
                <button className="btn btn-wide  bg-white font-bold text-lg hover:bg-gray-300 md:shadow"><FaGooglePlay />Google Play</button>
            <button className="btn btn-wide bg-white font-bold text-lg  hover:bg-gray-300 md:shadow"><FaAppStore />App Store</button>
            </div>

        </div>

        
        <div className="flex justify-center items-center">
           <img src={heroImage} alt="" />
        </div>
        <section class=" bg-gradient-to-tl to-[#632EE3] from-[#9F62F2] "><div class="pt-10 flex flex-col justify-center items-center"><h2 class="text-white font-bold text-4xl text-center">Trusted by Millions, Built for You</h2><div class="stats stats-vertical lg:stats-horizontal  text-white py-10"><div class="stat space-y-3"><div class="stat-figure"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M376 160H272v153.37l52.69-52.68a16 16 0 0 1 22.62 22.62l-80 80a16 16 0 0 1-22.62 0l-80-80a16 16 0 0 1 22.62-22.62L240 313.37V160H136a56.06 56.06 0 0 0-56 56v208a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V216a56.06 56.06 0 0 0-56-56zM272 48a16 16 0 0 0-32 0v112h32z"></path></svg></div><div class="">Total Downloads</div><div class="stat-value  text-5xl">29.6M</div><div class="stat-desc text-white">21% more than last month</div></div><div class="stat space-y-3"><div class="stat-figure "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></div><div class=" text-white">Total Reviews</div><div class="stat-value ">906K</div><div class="stat-desc text-white">46% more than last month</div></div><div class="stat space-y-3"><div class="stat-figure "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49zM345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32zM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95zM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50z"></path></svg></div><div class="stat-title text-white">Active Apps</div><div class="stat-value">132+</div><div class="stat-desc text-white">31 more will Launch</div></div></div></div></section>

    </div>
</section>

        </div>
    );
};


export default Banner;