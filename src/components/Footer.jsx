import React from 'react'
import logo from '../assets/logo.png' 

const Footer = () => {
  return (
    <div className='bg-first md:px-14 p-4 max-w-screen-2xl mx-auto text-white '>
      <div className='my-12 flex flex-col md:flex-row gap-10'>
           <div className="md:w-1/2 space-y-8">
              <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-first '>
                <img src={logo} alt="" className='w-10 inline-block items-center'/>
                <span className='text-white' >Punk </span>
            </a>
            <p className='md:w-1/2'>
                A  simple paragraph is comprised of three major component.
                The first sentence, which is often a declaretive sentence
            </p>
            <div>
            <input type="email" name='email' id='email' placeholder='Your Email'
            className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none'/>
            <input type="submit" value='Subscribe' className='px-4 py-2 bg-second rounded-md -ml-2
            cursor-pointer hover:bg-white hover:text-first duration-300 transition-all '/>
          </div>
          </div>
           <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 item-start'>
             <div  className='space-y-4 mt-5'>
                <h4 className='text-xl'>Platform</h4>
                <ul className='space-y-3'>
                    <a href="/" className="block hover:text-gray-300">Overview</a>
                    <a href="/" className="block hover:text-gray-300">Features</a>
                    <a href="/" className="block hover:text-gray-300">About</a>
                    <a href="/" className="block hover:text-gray-300">Pricing</a>
                </ul>
             </div>
             <div  className='space-y-4 mt-5 '>
                <h4 className='text-xl'>Help</h4>
                <ul className='space-y-3'>
                    <a href="/" className="block hover:text-gray-300">How does it works</a>
                    <a href="/" className="block hover:text-gray-300">Where to ask questions</a>
                    <a href="/" className="block hover:text-gray-300">How tpo play</a>
                    <a href="/" className="block hover:text-gray-300">PWhat is needed for this</a>
                </ul>
             </div>
             <div  className='space-y-4 mt-5'>
                <h4 className='text-xl'>Contact</h4>
                <ul className='space-y'>
                    <a href="/" className="block hover:text-gray-300">6202909314</a>
                    <a href="/" className="block hover:text-gray-300 space-y-4">rajsahil3324@gmail.com</a>
                    <a href="/" className="block hover:text-gray-300">Mohali, kharar</a>
                    <a href="/" className="block hover:text-gray-300">140301</a>
                </ul>
             </div>
           </div>
      </div>
    </div>
  )
}

export default Footer
