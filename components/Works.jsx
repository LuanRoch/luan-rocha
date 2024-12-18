'use client';
import Link from "next/link";
import { Button } from "./ui/button";


import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import ProjectCard from "@/components/ProjectCard";
import { Swiper, SwiperSlide} from "swiper/react";


const projectData = [
    {
        image: '/work/ApiCnpj.jpg',
        category: 'ReactJs',
        name: 'Consulta de Cnpj',
        description:
            'Sistema de Consumo de API com React, TypeScript, Axios e Material-UI',
        link: '/',
        github: '/'
    },
    {
        image: '/work/EmailDigital.jpg',
        category: 'Email-HTML',
        name: 'email',
        description:
            ' Este e-mail HTML é destinado a clientes interessados em investir em Letras de Crédito do Agronegócio (LCA) oferecidas pelo Banco CNH Capital S.A. ',
        link: '/',
        github: '/'
    },
    {
        image: '/work/LandingPage.jpg',
        category: 'HTML CSS',
        name: 'landing page Caed 2019',
        description:
            'Este projeto visa desenvolver uma landing page intuitiva e moderna para o CAEd (Centro de Políticas Públicas e Avaliação da Educação), sediado em Juiz de Fora. ',
        link: '/',
        github: '/'
    },
    // {
    //     image: '/work/',
    //     category: 'node-RED',
    //     name: 'name',
    //     description:
    //         ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error',
    //     link: '/',
    //     github: '/'
    // },
    
  ];


const Works = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className="container mx-auto">

                <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className="section-titlte mb-4">Projetos recentes</h2>
                    <p className="subtitle mb-8"></p>
                    <Link href='/projects'><Button>Todos os projetos</Button></Link>
                </div>
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper
                        className='h-[480px]'
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {projectData.slice(0.4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section >
    )
}

export default Works