import React from 'react'
import lastpage from '../assets/banner.png'

const Lastpage = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2x1 mx-auto mt-20'>
    <div className='gradientBg rounded-xl rounded-br-[80px] md:p=9 px-4 py-9'>
       <div className="flex flex-col md:flex-row-reverse md:flex-row justify-between items-center gap-9  ">
       <div>
                    <img src={lastpage} alt="" className="lg:h-[386px] hover:-translate-y-4 transition-all duration-300" />
               </div>
          <div className="md:w-3/5">
             <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'> Each student an share their discount code for friends</h2>
             <p className='text-[#ebebeb] text-2xl mb-8'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>
               <div className='space-x-5 space-y-4'>
                <button className='btnprimary'>I Have A Code</button>
                
               </div>
           </div>
               
        </div>
  </div>
</div>
  )
}

export default Lastpage
