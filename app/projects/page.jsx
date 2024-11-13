'use client'

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
      image: '/work/ApiCnpj.jpg',
      category: 'ReactJs',
      name: 'Consulta de Cnpj',
      description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error',
      link: '/',
      github: '/'
  },
  {
      image: '/work/EmailDigital.jpg',
      category: 'Email-Digital',
      name: 'email-digital',
      description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error',
      link: '/',
      github: '/'
  },
  {
      image: '/work/LandingPage.jpg',
      category: 'HTML CSS',
      name: 'landing page Caed 2019',
      description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error',
      link: '/',
      github: '/'
  },
  {
      image: '/work/',
      category: 'node-RED',
      name: 'name',
      description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error',
      link: '/',
      github: '/'
  },
  
];

const uniqueCategories = ['Todos os projetos', ...new Set(projectData.map(item => item.category))];


const projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('Todos os projetos');
  const filteredProjects = projectData.filter(project => {
    return category === 'Todos os projetos' ? project : project.category === category;
  });



  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className='section-titlte mb-8 xl:mb-16 text-center mx-auto'>
          Projetos
        </h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className='capitalize w[162px] md:w-auto'

              > {category}
              </TabsTrigger>

            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section >
  )
}

export default projects