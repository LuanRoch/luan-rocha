
import DevImg from "./DevImg"
import Image from "next/image"
import {
    User2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Luan Rocha Ladeira Prazeres',
    },

    {
        icon: <PhoneCall size={20} />,
        text: '32 9 9932-7356',
    },

    {
        icon: <MailIcon size={20} />,
        text: 'lr.prazeres@bol.com.br',
    },

    {
        icon: <Calendar size={20} />,
        text: '3 de maio de 1998',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Analise e desenvolvimento de sistemas',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'São Bernardo do Campo, São Paulo',
    },
];

const qualificationData = [
    {
        title: 'Educação',
        data: [
            {
                university: 'Faculdade Estacio de Sá',
                qualification: 'Analise e desenvolvimento de sistemas',
                years: '2018 - 2022',
            }
        ]
    },
    {
        title: 'Experiencias',
        data: [
            {
                company: 'City Connect',
                qualification: 'Analise e infrestutura de redes',
                years: '2023 - 2025',
            }
        ]
    }
];

const skillData = [
    {
        title: 'Habilidades',
        data: [
            {
                name: 'HTML, CSS, REACT, NEXTJS',
            },
            {
                name: 'Front-end develope',
            },
            {
                name: 'PHP, JAVA,',
            },
            {
                name: 'Back-end development',
            },
        ]
    },
    {
        title: 'Software',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },

        ]
    }
];


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-titlte mb-8 xl:mb-16 text-center mx-auto">
                    Sobre mim
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* imagem */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles='w-[505px] h-[505px] bg-no-repeat relative' />
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Informação Pessoal</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualification'>Graduação</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Habilidades</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Apaixonado por tecnologia a mais de 15 anos</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                            Me espacializei em desenvolvimento web com foco em automação de projetos
                                        </p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                        key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Idiomas</div>
                                            <div className="border-b border-border"></div>
                                            <div>Português, Inglês</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualification">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:left">
                                            Minha jornada
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 capitalize font-medium>
                                                        {getData(qualificationData, 'Experiencias').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col-gap-y-8">
                                                    {getData(qualificationData, 'Experiencias').data.map((item, index) => {
                                                        const { company, qualification, years } = item;
                                                        return (
                                                            <div className="flex gap-x-8 group"
                                                                key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute-left-[5px] group-hover:translate-y-[84px] transintion-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 capitalize font-medium>
                                                        {getData(qualificationData, 'Educação').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col-gap-y-8">
                                                    {getData(qualificationData, 'Educação').data.map((item, index) => {
                                                        const { university, qualification, years } = item;
                                                        return (
                                                            <div className="flex gap-x-8 group"
                                                                key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute-left-[5px] group-hover:translate-y-[84px] transintion-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">Habilidades</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About