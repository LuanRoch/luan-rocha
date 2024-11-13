'use client';
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react'

const Formulario = () => {
  return (
<form className='flex flex-col gap-y-4'>
    <div className='relative flex items-center'>
        <Input type='name' id='name' placeholder='Nome'/>
        <User className='absolute right-6' size={20}/>
    </div>
    <div className='relative flex items-center'>
        <Input type='email' id='email' placeholder='E-mail'/>
        <MailIcon className='absolute right-6' size={20}/>
    </div>
    <div className='relative flex items-center'>
        <Textarea placeholder='Escreva sua mensagem aqui.'/>
        <MessageSquare className='absolute top-4 right-6' size={20}/>
    </div>
    <Button className ='flex items-center gap-x-1 max-w-[166px]'>Enviar
<ArrowRightIcon size={20}/>
    </Button>
</form>
);
}

export default Formulario