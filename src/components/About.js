import React from 'react'
import Footer from './Footer'
import Travel from './Travel'
import Cards from './Cards'

function About() {
  return (
    <>
    <Travel/>
    <div name="about" className="w-full ">
        <div className="max-w-[1240px] mx-auto">
            <div className="text-center">
                <h2 className="text-5xl pt-28 font-bold transition-transform duration-1000 ease-out transform hover:skew-x-12">Trusted by developers across the world</h2>
                <p className="text-3xl py-6 text-gray-500 transition-transform duration-1000 ease-out transform hover:translate-x-10">Lorem ipsum dolor sit amet consecteture,adipisicing elid.Cumque asperiores earum placeat veritatis dignissimos itaque</p>
            </div>

            <div className="grid md:grid-cols-3 px-2 text-center">
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className="text-6xl font-bold text-indigo-600">100%</p>
                    <p className="text-gray-400 mt-2">Completion</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className="text-6xl font-bold text-indigo-600">24/7</p>
                    <p  className="text-gray-400 mt-2">Delivery</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className="text-6xl font-bold text-indigo-600">100k</p>
                    <p  className="text-gray-400 mt-2">Transaction</p>
                </div>
            </div>
        </div>
    </div>
    
   <Cards/>
    <Footer/>

    </>
  )
}

export default About