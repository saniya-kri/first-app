import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex items-center justify-evenly mb-10 border-b border-b-neutral-800 py-2 backdrop:blur px-8
    sticky backdrop-blur-lg top-0 z-50'>
      <div className='flex flex-shrink-0 w-10 lg:ml-20'>
        <img className='sm:mr-6'src={logo} alt="logo" />
      </div>
      <div className='flex space-x-4 text-neutral-300 text-xxl lg:text-xxl items-center justify-center lg:mr-20'>
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaFacebook/>    
      </div>
    </div>
  )
}

export default Navbar
