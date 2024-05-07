import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion"

const container =(delay) =>({
  hidden:{x:-100, opacity:0},
  visible : {
    x :0,
    opacity:1,
    transition:{duration : 0.5, delay: delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-20 lg:mb-36">
      <div className="flex flex-wrap mt-20">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start items-center">
            <motion.h1 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-24">
              Kevin Rush
            </motion.h1>
            <motion.span 
            variants={container(1)}
            initial="hidden"
            animate="visible"className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-2xl lg:text-4xl text-transparent pb-4 sm:mb-5">
              Fronted Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-neutral-400 text-xxl max-w-xl py-2 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full mt-16 lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                        <motion.img 
                        initial={{x : 100, opacity:0,}}
                          animate={{x:0,opacity:1}}
                          transition={{duration:1, delay:1.2}}
                      
                        className="rounded-lg" src={profilePic} alt="Kavin Rush" />
                </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
