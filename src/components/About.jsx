import React from "react";
import aboutPic from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"


const container =(delay) =>({
  hidden:{x:100, opacity:0},
  visible : {
    x :0,
    opacity:1,
    transition:{duration : 1, delay: delay}
  }
})


const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="w-1/2 mx-auto text-center mt-32"> 
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-4xl text-transparent pb-4 mx-auto text-center">
          About Me
        </span>
      </div>
      <div className="flex flex-wrap mt-20">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x : -100, opacity:0,}}
            animate={{x:0,opacity:1}}
            transition={{duration:1, delay:2}}className="rounded-md" src={aboutPic} alt="Kavin Rush" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center mt-10 w-11/12 text-xxxl">
            <motion.p 
            variants={container(2)}
            initial="hidden"
            animate="visible"
            className="text-neutral-400 text-xxl max-w-xl py-2 font-light tracking-tighter">
              {ABOUT_TEXT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
