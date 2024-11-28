import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {
  RiBriefcase4Fill,
  RiteamFill,
  RitodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';


import Socials from "./Socials";



const Hero = () => {
  return (
    <section className="flex py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* texto */}
          <div className="flex max-w-[900px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Desenvolvedor Front-End</div>
            <h1 className='h1'>Olá, me chamo Luan Rocha</h1>
            <p className="subtitle max-w-[740px] mx-auto xl:mx-0 padding [2px]">
              Graduado em Análise e Desenvolvimento de Sistemas, especializado em programação, gestão de projetos e ferramentas como HTML, CSS, JavaScript, PHP, Bootstrap e React Js. 
              Atualmente, atua como Especialista em Suporte de TI, com experiência em organização de redes, configuração de switches e atendimento a usuários, resolvendo questões de conectividade e desempenho de forma proativa.</p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href='/contact'>
                <Button className='gap-x-2'><Send size={18} />
                  Entra em contato
                </Button>
              </Link>
              <Link href={'https://drive.google.com/file/d/1ZqjvYT9xm1eqevEjscdN9sbW6e0R7vO4/view?usp=drive_link'}>
                <Button variant='secondary' className='gap-x-2'><Download size={18} />
                  Baixar CV
                </Button>
              </Link>
            </div>
            <div className="hidden sm:flex">
              <Socials containerStyles='flex gap-x-6  mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
            </div>
          </div>
          {/* imagem */}
          {/* <div className="hidden flex-relative">imagem</div> */}
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero