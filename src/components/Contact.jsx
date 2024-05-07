import React from 'react'
import {CONTACT} from "../constants";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='border-b border-b-neutral-800 text-center mt-20 pb-5'>
      <motion.h1 
            whileInView={{opacity :1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
      className=' text-neutral-200 text-3xl font-light'>Get In Touch</motion.h1>
      <div className='max-w-xl mx-auto text-center tracking-tighter mt-2'>
       <motion.p 
             whileInView={{opacity :1, x:0}}
             initial={{opacity:0, x:-100}}
             transition={{duration:1.5}}className='my-4 text-neutral-400 text-sm'>{CONTACT.address}</motion.p>
       <motion.p 
             whileInView={{opacity :1, x:0}}
             initial={{opacity:0, x:-100}}
             transition={{duration:1.5}}className='my-4 text-neutral-400 text-sm'>{CONTACT.phoneNo}</motion.p>
       <motion.em 
            whileInView={{opacity :1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}className='my-4 text-neutral-400 text-sm'>{CONTACT.email}</motion.em>
      </div>
    </div>
  )
}

export default Contact
