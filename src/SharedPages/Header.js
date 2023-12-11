import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex lg:justify-between justify-end lg:pl-14 pl-3 lg:pr-14 pr-3 py-2'>
            <div className='lg:flex gap-x-5 hidden'>
                <img className='w-28 h-14 ' src="https://xlri.accredian.com/images/Frame%2095.png" alt="" />
                <p className='border-r-2 border-black'></p>
                <img className='w-36 h-14 ' src="https://xlri.accredian.com/images/accredian-logo-1.png" alt="" />
            </div>
            <div className='flex gap-x-2'>
                <Link to="/" className='hover:text-[#0129FF] font-bold hover:duration-300'>Login</Link>
                <p>|</p>
                <Link to="/register" className='hover:text-[#0129FF] font-bold hover:duration-300'>Sign-Up</Link>
            </div>
        </div>
    );
};

export default Header;