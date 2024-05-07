import React from 'react'
import { PROJECTS } from "../constants";
import { motion } from 'framer-motion';

const container =(delay) =>({
  hidden:{x:-100, opacity:0},
  visible : {
    x :0,
    opacity:1,
    transition:{duration : 0.5, delay: delay}
  }
})


const Project = () => {
  return (
    <div>
       <div className="border-b border-b-neutral-800 pb-4 mt-8">
      <h1 className="text-center text-4xl my-20">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
          key={index} className="flex flex-wrap lg:justify-center mb-8">
            <div className="w-full lg:w-1/4 lg:ml-20 my-10">
              <img className='rounded w-32' src={project.image}/>
            </div>
            <div className="w-full max-w-xl lg:w-3/4 mb-2 text-sm text-white my-10">
              <h6 className="mb-2 font-semibold">{project.title}
              </h6>
              <p className="mb-2 text-xxl text-neutral-400 py-2">
                {project.description}
              </p>
              {project.technologies.map((tech,index) => (
                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 lg:px=5 py-1 text-sm font-medium text-purple-800">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Project
