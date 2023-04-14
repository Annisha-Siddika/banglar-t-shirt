import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='text-center bg-green-100 py-5'>
            <Link className='mr-4 text-lg text-green-700 hover:text-red-600 ' to='/'>Home</Link>
            <Link className='mr-4 text-lg text-green-700 hover:text-red-600' to='/review'>Order review</Link>
            <Link className='mr-4 text-lg text-green-700 hover:text-red-600' to='/about'>About</Link>
            <Link className='mr-4 text-lg text-green-700 hover:text-red-600' to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;