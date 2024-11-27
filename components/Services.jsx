import { GanttChartSquare, Blocks, Workflow } from 'lucide-react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
}
    from '@/components/ui/card'


const ServicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'APi CNPJ',
        description: 'Este projeto é uma aplicação web desenvolvida com ReactJS, TypeScript, Axios e Material-UI. A aplicação consome a API BrasilAPI',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Email Html',
        description: 'Este e-mail HTML é destinado a clientes interessados em investir em Letras de Crédito do Agronegócio (LCA) oferecidas pelo Banco CNH Capital S.A. ',
    },
    {
        icon: <Workflow size={72} strokeWidth={0.8} />,
        title: 'Landing page',
        description: 'Este projeto visa desenvolver uma landing page intuitiva e moderna para o CAEd (Centro de Políticas Públicas e Avaliação da Educação), sediado em Juiz de Fora. ',
    },
];
const Services = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-titlte mb-12 xl:mb-24 text-center mx-auto">
                    Meus Projetos
                </h2>

                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24'>
                    {ServicesData.map((item, index) => {
                        return <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                            key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg subtitle'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;