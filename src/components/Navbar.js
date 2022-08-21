import React,{useState} from 'react'
import {MenuIcon,XIcon} from "@heroicons/react/outline";
import { Link, } from 'react-router-dom'

function Navbar() {
const [nav,setNav]=useState(false)
const handleClick=()=>setNav(!nav)

const handleClose=()=>setNav(!nav)
  return (
    <div className="w-screen h-[80px] sticky-top z-10 bg-gray-200 fixed drop-shadow-lg">
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className="flex items-center">
                <h1 className="text-3xl font-bold font-serif mr-4 sm:text-4xl">BEACHES</h1>
                <ul className="hidden md:flex  text-xl font-serif">
               <li className='transition-transform duration-1000 ease-out transform hover:scale-125'> <Link  to="/"  smooth={true}  duration={500}>Home</Link></li>
              <li className='transition-transform duration-1000 ease-out transform hover:scale-125'>  <Link  to="/about"  smooth={true} offset={-200} duration={500}>About</Link></li>
              <li className='transition-transform duration-1000 ease-out transform hover:scale-125'>  <Link  to="/support"  smooth={true} offset={-50} duration={500}>Support</Link></li>
              <li className='transition-transform duration-1000 ease-out transform hover:scale-125'> <Link  to="/all"  smooth={true} offset={-100} duration={500}>Platforms</Link></li>
              <li className='transition-transform duration-1000 ease-out transform hover:scale-125'>  <Link  to="/price"  smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                </ul>
            </div>
            <div className="hidden md:flex pr-4">
                <button className="border-none bg-transparent text-black mr-4">Sign In</button>
                <button className="px-8 py-3">Sign Up</button>
            </div>
            <div className='md:hidden mr-4'onClick={handleClick}>
                {!nav ? <MenuIcon className="w-5"/> : <XIcon className="w-5"/>}
            </div>
        </div>
        
        <ul className={!nav ? 'hidden': 'absolute bg-zinc-200 w-full px-8'}>
               <li  className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} to="home"  smooth={true}  duration={500}></Link>Home</li>
                <li  className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose}  to="about"  smooth={true} offset={-200} duration={500}></Link>About</li>
                <li  className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose}  to="support"  smooth={true} offset={-50} duration={500}></Link>Supports</li>
                <li  className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose}  to="platforms"  smooth={true} offset={-100} duration={500}></Link>Platforms</li>
                <li  className="border-b-2 border-zinc-300 w-full"><Link onClick={handleClose}  to="pricing"  smooth={true} offset={-50} duration={500}></Link>Pricing</li>
            
                 <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-600 px-8 mb-4">Sign In</button>
                    <button className="px-8 py-3">Sign Up</button>
                 </div>
        </ul>
    </div>
  )
}

export default Navbar