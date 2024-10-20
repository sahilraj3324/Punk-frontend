import React from 'react'
import banner from '../assets/banner.png'
import Banner from '../shared/Banner'

const Home = () => {
  return (
   <Banner banner={banner} heading={"Develop your skills without diligence"} subheading={"A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in BHARAT."}
    btn1={"Get Started"} btn2={"Discount"} />
  )
}

export default Home
