import React from 'react'
import {BsSuitHeart} from "react-icons/bs"
import {IoBedOutline,IoLocationOutline} from 'react-icons/io5'
import {GiBathtub,GiHomeGarage} from 'react-icons/gi'
import {AiOutlineDoubleRight} from 'react-icons/ai'


import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"

const NewestDeals = () => {
     
  return (
    <div className='py-10'>
        <p className='w-16 px-4 py-1 bg-[aqua] rounded-lg text-sm '> NEW</p>
        <h1 className='text-4xl font-bold'>NEWEST DEALS </h1>

        <div className='deals  grid  xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  gap-4 py-10'> 

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>

            <div className='relative h-[60%]'>
                <img src={pic2} alt='#' className='w-full h-full object-cover rounded-t-xl'/>


                <div className='absolute top-0 right-0 p-4 '>
                <BsSuitHeart size={"1.5rem"} className='text-[red]'/>

                </div>
            </div>
            

            <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1 '>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>

                    

                    <div className='flex items-center space-x-1' >
                        <GiBathtub/>
                        <p className='text-sm text-gray-400' > 2 bath </p>
                    </div>

                    <div className='flex items-center space-x-1' >
                        <GiHomeGarage/>
                        <p className='text-sm text-gray-400' > 
                            1 gar
                        </p>
                    </div>
                </div>


                <h1 className='text-2xl font-semibold'>
                    Kshs 110,000
                </h1>
                <div className='flex items-center space-x-2'>
                    <IoLocationOutline/>
                    <p className='text-sm text-gray-600'> Lower Kabete, Nairobi, Kenya</p>
                </div>
            </div>


        </div>

        <div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>

<div className='relative h-[60%]'>
    <img src={pic3} alt='#' className='w-full h-full object-cover rounded-t-xl'/>


    <div className='absolute top-0 right-0 p-4 '>
    <BsSuitHeart size={"1.5rem"} className='text-[red]'/>

    </div>
</div>


<div className='p-4 space-y-4'>
    <div className='flex space-x-5 items-center'>
        <div className='flex items-center space-x-1 '>
            <IoBedOutline/>
            <p className='text-sm text-gray-400'>6 Bed</p>
        </div>

        

        <div className='flex items-center space-x-1' >
            <GiBathtub/>
            <p className='text-sm text-gray-400' > 2 Bath</p>
        </div>

        <div className='flex items-center space-x-1' >
            <GiHomeGarage/>
            <p className='text-sm text-gray-400' > 
                2 Gar
            </p>
        </div>
    </div>


    <h1 className='text-2xl font-semibold'>
        Kshs 125,000
    </h1>
    <div className='flex items-center space-x-2'>
        <IoLocationOutline/>
        <p className='text-sm text-gray-600'> Milimani, Kitengela, Kenya</p>
    </div>
</div>


</div>


<div className='deal h-[350px] bg-white drop-shadow-2xl rounded-xl'>

            <div className='relative h-[60%]'>
                <img src={pic4} alt='#' className='w-full h-full object-cover rounded-t-xl'/>


                <div className='absolute top-0 right-0 p-4 '>
                <BsSuitHeart size={"1.5rem"} className='text-[red]'/>

                </div>
            </div>
            

            <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1 '>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>7 Bed</p>
                    </div>

                    

                    <div className='flex items-center space-x-1' >
                        <GiBathtub/>
                        <p className='text-sm text-gray-400' > 3 Bath </p>
                    </div>

                    <div className='flex items-center space-x-1' >
                        <GiHomeGarage/>
                        <p className='text-sm text-gray-400' > 
                            2 Gar
                        </p>
                    </div>
                </div>


                <h1 className='text-2xl font-semibold'>
                    Kshs 150,000
                </h1>
                <div className='flex items-center space-x-2'>
                    <IoLocationOutline/>
                    <p className='text-sm text-gray-600'> Kisaju, Isinya, Kenya</p>
                </div>
            </div>


        </div>

<div className='w-full flex justify-center py-5'>
    <button className='bg-[aqua] px-5 py-2 rounded:md text-xl flex items-center space-x-2'>
        <span>
            View More
        </span>
        <AiOutlineDoubleRight/>
    </button>

</div>



        </div>


    </div>
  )
}

export default NewestDeals