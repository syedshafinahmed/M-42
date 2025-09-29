import { Menu, X } from 'lucide-react';
import React, { use, useState } from 'react';

const NavBar = ({ dataPromise }) => {
    const datas = use(dataPromise)
    const displayData = datas.map(data => <p className='text-center px-3 hover:bg-amber-700 md:hover:bg-transparent text-black md:text-white'>{data.label}</p>)
    const [open, setOpen] = useState(false);
    return (
        <div className='flex justify-between items-center p-7 '>
            <div onClick={() => setOpen(!open)} className='flex items-center justify-center gap-x-4'>
                {
                    open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000 bg-amber-500
                    ${open ? 'top-10 left-15' : '-top-40'}`}>
                    {
                        displayData
                    }
                </ul>

                <h1 className='font-black text-2xl'>Zyra</h1>
            </div>
            <div className='gap-x-8 md:flex hidden'>
                {
                    displayData
                }
            </div>
            <button className='btn'>Button</button>
        </div>
    );
};

export default NavBar;