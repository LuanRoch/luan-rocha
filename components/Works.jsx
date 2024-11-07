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
        image: '/work/3.png',
        category: 'React js',
        name: 'name',
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error natus molestias veritatis no impedit placeat eveniet consectetur esse? Nam quos mollitia obcaecati eligendi at suscipit unde modi temporibus',
        link: '/',
        github: '/'
    },
    {
        image: '/work/2.png',
        category: 'React js',
        name: 'name',
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error natus molestias veritatis no impedit placeat eveniet consectetur esse? Nam quos mollitia obcaecati eligendi at suscipit unde modi temporibus',
        link: '/',
        github: '/'
    },
    {
        image: '/work/1.png',
        category: 'React js',
        name: 'name',
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error natus molestias veritatis no impedit placeat eveniet consectetur esse? Nam quos mollitia obcaecati eligendi at suscipit unde modi temporibus',
        link: '/',
        github: '/'
    },
    {
        image: '/work/3.png',
        category: 'React js',
        name: 'name',
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error natus molestias veritatis no impedit placeat eveniet consectetur esse? Nam quos mollitia obcaecati eligendi at suscipit unde modi temporibus',
        link: '/',
        github: '/'
    },
    {
        image: '/work/2.png',
        category: 'React js',
        name: 'name',
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error natus molestias veritatis no impedit placeat eveniet consectetur esse? Nam quos mollitia obcaecati eligendi at suscipit unde modi temporibus',
        link: '/',
        github: '/'
    },
    {
        image: '/work/1.png',
        category: 'React js',
        name: 'name',
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias error natus molestias veritatis no impedit placeat eveniet consectetur esse? Nam quos mollitia obcaecati eligendi at suscipit unde modi temporibus',
        link: '/',
        github: '/'
    }
];


const Works = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className="container mx-auto">

                <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center text-center xl:items-start'>
                    <h2 className="section-titlte mb-4">Projetos recentes</h2>
                    <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href='/projects'><Button>Todos os projetos</Button></Link>
                </div>
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper
                        className='h-[480px] bg-pink-100'
                        sliderPerView={1}
                        breakpoints={{
                            640: {
                                sliderPerView: 2
                            }
                        }}
                        spaceBetween={30}
                        modules={Pagination}
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