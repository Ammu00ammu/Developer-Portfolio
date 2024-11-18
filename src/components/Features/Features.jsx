import React from 'react'
import Cards from './Cards'
import { FaGlobe, FaMobile, FaBars } from 'react-icons/fa'
import { SiAntdesign, SiProgress } from 'react-icons/si'
import { AiFillAppstore } from 'react-icons/ai'
import Title from '../layouts/Title'

const Features = () => {
  return (
    <section id='features' className='w-full  py-20   border-b-[1px] border-b-black'>
    
    <Title title="Features" des="What I Do"
    />   
      
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-20 lg:gap-15 sm:mr-16'>
        <Cards 
        title="Business Stratagy"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquam libero pariatur cupiditate hic quae!"
        icon={<FaBars />}
        />
        <Cards 
        title="App Development"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquam libero pariatur cupiditate hic quae!"
        icon={<AiFillAppstore/>}
        />
        
        <Cards 
        title="SEO Optimisation"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquam libero pariatur cupiditate hic quae!"
        icon={<SiProgress/>}
        />
        
        <Cards
        title="Mobile Development"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquam ammu bhatt best !"
        icon={<FaMobile/>}
        />
        <Cards
        title="UX Design"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquam libero pariatur cupiditate hic quae!"
        icon={<SiAntdesign/>}
        />
        <Cards
        title="Hosting Websites"
        des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aliquam libero pariatur cupiditate hic quae!"
        icon={<FaGlobe/>}
        />
        </div>
    </section>
  )
}

export default Features