import Link from "next/link"
import { Button } from "./ui/button"
import { Download, Send } from "lucide-react"

import {
  RiBriefcase4Fill,
  RiteamFill,
  RitodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";



const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* texto */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Desenvolvedor Front-End</div>
            <h1 className='h1'>Olá, me chamo Luan Rocha</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Graduado em Análise e Desenvolvimento de Sistemas, possuo especialização em programação e gestão de projetos,
              destacando habilidades em HTML, CSS, JavaScript, PHP, Bootstrap e React Js, preparado para contribuir com soluções
              eficazes e inovadoras no campo da Tecnologia da Informação. Atualmente, atuo como Especialista em Suporte de TI,
              com experiência sólida na eficiente organização de cabos de rede e configuração avançada de switches. Destaco-me no
              atendimento a usuários, resolvendo questões de conectividade e desempenho de maneira proativa.</p>
            <div className="flex flex-col gap-y-2 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
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
            <Socials containerStyles='flex gap-x-6  mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
          </div>
          {/* imagem */}
          <div className="hidden flex-relative">imagem</div>
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