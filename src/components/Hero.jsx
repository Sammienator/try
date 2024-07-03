import React from 'react'

import pic1 from "../assets/pic1.jpg"

const Hero = () => {
  return (
    <div>
       <nav className='flex justify-between items-center py-5'>
        <h1 className='text-xl md:text-2xl font-bold'>
            Lawsavic Investments Limited.
        </h1>

        <ul className='flex items-center space-x-5 text-xs md:text-base'>
            <li> About Us</li>
            <li> Trending</li>
            <li> Features</li>
        </ul>
        <button className='bg-[aqua] px-5 py-2 rounded-xl text-xs md:text-base'>
            Contact Us.
        </button>
        </nav>



        <div className='h-[500px] relative'>
            <img src={pic1}  alt='#' className='w-full h-full object-cover rounded-md'/>

            <div className='absolute bottom-5 w-full'>
                <div className='w-11/12
                 xl:w-4/5 m-auto bg-white grid grid-cols-2 lg:flex justify-between items-center p-5 drop-shadow-2xl md:space-x-4 md:rounded-md'>

                    <div className='flex flex-col justify-center items-center'>
                        <label htmlFor="location">Location </label>
                        <input type='text' placeholder='Nairobi' className='outline-2  items-center justify-center text-xs'/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="property">Property </label>
                        <input type='text' placeholder='Property' className='outline-2 items-center justify-center text-xs' />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="price">Max Price </label>
                        <input type='text' placeholder='100,000 Kshs'  className='outline-2 items-center justify-center text-xs'  />
                    </div>
                    <div>
                        <button className='bg-[aqua] px-5 py-2 mt-5 md:mt-0 md:rounded-full'>
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>

     
    </div>
  )
}

export default Hero