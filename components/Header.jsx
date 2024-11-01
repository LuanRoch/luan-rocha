'use client';
import React, { useState, useEffect } from 'react';

import Logo from './logo'
import ThemeToggle from './ThemeToggle'
import Nav from './Nav'
import MoblieNav from './MoblieNav';
import { usePathname } from 'next/navigation';


export const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

useEffect(()=>{
    const scrollYPos = window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return ()=> window.removeEventListener('scroll', scrollYPos);
});

    return (
        <header className={`${header ? 'py-4 bg-white shadown-lg dark:bg-accent' : 'py-5 dark:bg-transparent'}sticky top-0 z-30 transition-all`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className='flex items-center gap-x-6'>
                        <Nav
                            containerStyles='hidden xl:flex gap-x-8 items-center'
                            linkStyles='relative hover:text-primary transition-all'
                            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' />

                        <ThemeToggle />
                        <div className='xl:hidden'>
                            <MoblieNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>)
}



export default Header;