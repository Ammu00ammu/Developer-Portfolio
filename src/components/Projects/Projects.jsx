import React from "react";
import Title from "../layouts/Title";
import ProjectCards from "./ProjectCards";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title 
         title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
         des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-14">
        <ProjectCards 
         title="E-commerce website"
         des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
          src={project1}
        />
        <ProjectCards
        title="Password Manager"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
         src={project2}
        />
        <ProjectCards
        title="Todo App"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
         src={project3}
        />
        <ProjectCards 
        title="Password Manager"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
         src={project2}
        />
        <ProjectCards 
        title="Todo App"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
         src={project3}
        />
        <ProjectCards
        title="E-commerce website"
        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in a eligendi placeat animi ammu is grat guy to ! "
         src={project1}
        />
      </div>
    </section>
  );
};

export default Projects;
