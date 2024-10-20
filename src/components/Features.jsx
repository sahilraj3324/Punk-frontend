import React from 'react'
import feature from '../assets/features.png'


const features = () => {
  return (
    <div className='my-24 md:px-24 px-4 max-w-screen-2xl mx-auto'>
      <div className='flex flex-col lg:flex-row justify-betwee items-start gap-10'>
        <div className='lg:w-1/4'>
            <h3 className='text-3xl text-first font-bold lg:w-1/2 mb-3'>Why we are better then others</h3>
            <p className='text-base text-third '>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>
             
        </div>
        <div className='w-full lg:w-3/4'>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px]
             h-96 shadow-3xl p-8 items-center flex justify-center items-center 
             hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                <div>
                    <img src={feature} alt='' />
                    <h5 className='text-2xl font-semibold text-first px-5 text-center mt-5'>Conventient study schedule</h5>
                </div>
            </div>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px]
             h-96 shadow-3xl p-8 items-center flex justify-center items-center 
             hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                <div>
                    <img src={feature} alt='' />
                    <h5 className='text-2xl font-semibold text-first px-5 text-center mt-5'>Conventient study schedule</h5>
                </div>
            </div>
            <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px]
             h-96 shadow-3xl p-8 items-center flex justify-center items-center 
             hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
                <div>
                    <img src={feature} alt='' />
                    <h5 className='text-2xl font-semibold text-first px-5 text-center mt-5'>Conventient study schedule</h5>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default features
