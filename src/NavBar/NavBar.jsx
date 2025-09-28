import { Menu, X } from 'lucide-react';
import React, { use, useState } from 'react';

const NavBar = ({ dataPromise }) => {
    const data = use(dataPromise)
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between items-center p-7'>
            <div onClick={() => setOpen(!open)} className='flex items-center justify-center gap-x-4'>
                {
                    open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                }

                <h1 className='font-black text-2xl'>Zyra</h1>
            </div>
            <div className='flex gap-x-8'>
                {
                    data.map(dat => <p>{dat.label}</p>)
                }
            </div>
            <button className='btn'>Button</button>
        </div>
    );
};

export default NavBar;