import React from 'react'
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex bg-red-800'>
      <nav className='flex flex-row justify-between items-center ml-20 mr-20 w-full'>
        <div className="w-24 flex items-center">
          <img src={Logo} alt="none" />
        </div>
        <div className="flex justify-center flex-grow font-sans text-5sm font-bold"> {/* Center horizontally */}
          <a href="/" className=" mx-8 hover:text-white">Home</a>
          <a href="/about" className="mx-8  hover:text-white">About</a>
          <a href="/gallery" className="mx-8  hover:text-white">Gallery</a>
          <a href="/latest" className="mx-8  hover:text-white">Latest</a>
          <a href="/upcoming" className="mx-8  hover:text-white">Upcoming</a>
        </div>
        <div >
          <Link to='/login'> <button className="bg-gray-500 hover:bg-gray-900 hover:text-slate-300 text-black font-bold py-2 px-4 rounded-xl" >Login</button></Link>
        </div>
      </nav>
    </div>
  );
}

export default Header