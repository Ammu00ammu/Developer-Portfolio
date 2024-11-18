import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-12"
    >
      {/* Wrapper for Equal Heights */}
      <div className="flex flex-col md:flex-row w-full md:items-start md:gap-10">
        {/* Design Skills Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="py-6 md:py-8 font-titleFont text-center">
            <p className="text-sm text-designColor tracking-[4px]">Features</p>
            <h2 className="text-2xl md:text-4xl font-bold">Design Skills</h2>
          </div>
          <div className="mt-8 md:mt-14 w-full flex flex-col gap-6">
            {[
              { skill: "Photoshop", level: "80%" },
              { skill: "Figma", level: "90%" },
              { skill: "Bootstrap", level: "80%" },
              { skill: "Design", level: "95%" },
              { skill: "Tailwind", level: "95%" },
              { skill: "Canvas", level: "80%" },
            ].map(({ skill, level }, index) => (
              <SkillBar key={index} skill={skill} level={level} delay={0.3 + index * 0.2} />
            ))}
          </div>
        </div>

        {/* Development Skills Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="py-6 md:py-8 font-titleFont text-center">
            <p className="text-sm text-designColor tracking-[4px]">Features</p>
            <h2 className="text-2xl md:text-4xl font-bold">Development Skills</h2>
          </div>
          <div className="mt-8 md:mt-14 w-full flex flex-col gap-6">
            {[
              { skill: "React", level: "95%" },
              { skill: "HTML5", level: "90%" },
              { skill: "CSS3", level: "90%" },
              { skill: "JavaScript", level: "80%" },
              { skill: "Software", level: "75%" },
              { skill: "Python", level: "85%" },
              { skill: "Next.js", level: "80%" },
              { skill: "Linux", level: "75%" },
              { skill: "Redux", level: "65%" },
            ].map(({ skill, level }, index) => (
              <SkillBar key={index} skill={skill} level={level} delay={0.3 + index * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillBar = ({ skill, level, delay }) => {
  return (
    <div className="overflow-x-hidden w-full">
      <p className="text-sm uppercase font-medium">{skill}</p>
      <span className="w-full h-2 bg-opacity-10 bg-gray-500 inline-flex rounded-md mt-2">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay }}
          className={`h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
          style={{ width: level }}
        >
          <span className="absolute -top-7 right-0 text-sm text-gray-400">{level}</span>
        </motion.span>
      </span>
    </div>
  );
};

export default Skills;
