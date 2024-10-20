import React from 'react'
import about3 from '../assets/about3.png'

const About2 = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2x1 mx-auto mt-20'>
    <div className=' rounded-xl rounded-br-[80px] md:p=9 px-4 py-9'>
       <div className="flex flex-col md:flex-row-reverse md:flex-row justify-between items-center gap-9  ">
       <div>
                    <img src={about3} alt="" className="lg:h-[386px] hover:-translate-y-4 transition-all duration-300" />
               </div>
          <div className="md:w-3/5">
             <h2 className='md:text-5xl text-2xl font-bold text-first mb-6 leading-relaxed '>You can Practice at any
<h2 className='text-second'>time convinent for you.</h2> </h2>
             <p className='text-[#505050] text-1xl mb-8'>A good example of a paragraph contains a topic conclusion.
'There are many different kinds of animals that live in BHARAT.</p>
               <div className='space-x-5 space-y-4'>
                <button className='btnprimary'>Get Started</button>
                
               </div>
           </div>
               
        </div>
  </div>
</div>
  )
}

export default About2
