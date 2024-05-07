import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Exprience = () => {
  return (
    <div className="border-b border-b-neutral-900 pb-4 mt-8">
      <h1 className="text-center text-4xl mb-10 py-10">Expriences</h1>
      <div>
        {EXPERIENCES.map((Exprience, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-8">
            <motion.div className="w-full lg:w-1/4 lg:ml-20">
              <p>{Exprience.year}</p>
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4 mb-2 text-sm text-white">
              <h6 className="mb-2 font-semibold">
                {Exprience.role} -{" "}
                <span className="text-sm text-purple-200">
                  {Exprience.company}
                </span>
              </h6>
              <p className="mb-2 text-xxl text-neutral-400 py-2">
                {Exprience.description}
              </p>
              {Exprience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px=5 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exprience;
