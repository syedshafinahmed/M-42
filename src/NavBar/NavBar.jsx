import { Menu } from 'lucide-react';
import React from 'react';

const NavBar = () => {
    return (
        <div className='flex justify-between items-center p-7'>
            <div className='flex items-center justify-center gap-x-4'>
                <Menu className='md:hidden'></Menu>
                <h1 className='font-black text-2xl'>Zyra</h1>
            </div>
            <ul className='flex gap-x-8'>
                <li>Home</li>
                <li>Blog</li>
                <li>Resources</li>
                <li>Contact</li>
            </ul>
            <button className='btn'>Button</button>
        </div>
    );
};

export default NavBar;