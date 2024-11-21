import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'


const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:2, transition:{duration:2}}} className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div>
          <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2008-2023</p>
            <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
          </div>
          <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Bechelor's In Computer Application"
              subTitle="Hemchand Yadav University (Durg University) (2020-2023)"
              result="69%"
              des="The training provided by universities in order to prepare people to work in various sectors of IT industries."
            />
            <ResumeCard
              title="Secondary School Education"
              subTitle="Saraswati ShiSHu Mandir School (2006-2018) And Govt.Higher Secondary School (2018-2020) "
              result="10th-69% 12th-55%"
              des="Secondary education or post-primary education covers two phases on the Classification of Education scale."
            />
            <ResumeCard
              title="Full Stack Developement Course"
              subTitle="From Online Referencess(2023-2024)"
              result="I learned The Skills"
              des="Acquired proficiency in both front-end and back-end technologies, enabling the development of fully functional web applications."
            />
          </div>
        </div>
        {/* <div>
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">2008-2023</p>
            <h2 className="text-4xl font-bold">Education Quality</h2>
          </div>
          <div className="mt-14 w-full h-[1000px] border-1-[6px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Bechelor's In Computer Application"
              subTitle="Hemchand Yadav University (Durg University) (2020-2023)"
              result="69%"
              des="The training provided by universities in order to prepare people to work in various sectors of IT industries."
            />
            <ResumeCard
              title="Secondary School Education"
              subTitle="Saraswati ShiSHu Mandir School (2006-2018) And Govt.Higher Secondary School (2018-2020) "
              result="10th-69% 12th-55%"
              des="Secondary education or post-primary education covers two phases on the Classification of Education scale."
            />
            <ResumeCard
              title="Full Stack Developement Course"
              subTitle="From Online Referencess(2023-2024)"
              result="I learned The Skills"
              des="Acquired proficiency in both front-end and back-end technologies, enabling the development of fully functional web applications."
            />
          </div>
        </div> */
      }
      </motion.div>
  )
}

export default Education