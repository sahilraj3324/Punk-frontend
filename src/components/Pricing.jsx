import {useState} from 'react'

const Pricing = () => {

    const [isYearly , setISYearly]=useState(false);

    const packages =[
        {name: "Start", monthlyPrice: 19 , yearlyPrice: 199, description: "A common form of lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur elit."},
        {name: "Advance", monthlyPrice: 39 , yearlyPrice: 399, description: "A common form of lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur elit."},
        {name: "Premium", monthlyPrice: 59 , yearlyPrice: 599, description: "A common form of lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur elit."},
    ]
  return (
    <div>
      <div className="md:px-14 p-4 max-w-s mx-auto py-10">
        <div className="text-center ">
            <h2 className="md:text-5xl text-3xl font-extrabold text-first mb-2">Here are all our plans </h2>
            <p className='text-third md:w-1/3 mx-auto px-4 '>A simple paragraph is comprised of three major components. The which is often a declarative sentence</p>
            <div className="mt-16">
                <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                    <span className='mr-8 text-2xl font-semibold'> Monthly</span>
                    <div className='w-14 h-6 bg-gray-300 rounded-full trsnsition duration-200 ease-in-out'>
                      <div className={`w-6 h-6 rounded-full transition duration-200  bg-first ease-in-out `}></div>
                    </div>
                    <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                </label>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
          {
            packages.map((pkg, index)=> <div key={index} className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
              <h3 className='text-3xl font-bold text-center text-first'>{pkg.name}</h3>
              <p className='text-third text-center my-5'>{pkg.description}</p>
              <p className='mt-5 text-center text-second text-4xl font-bold'>
                {isYearly ? `$${pkg.yearlyPrice}`:`$${pkg.monthlyPrice}`}<span className='text-base text-third'>/{isYearly ? 'year' :'month'}</span>
              </p>
              <div className="w-full mx-auto mt-8 flex item-center justify-center">
                <button className='btnprimary'>Get Started</button>
              </div>
              </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Pricing
