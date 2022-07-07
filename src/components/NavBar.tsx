import Link from 'next/link';
import React from 'react';

interface NavBarProps {

};

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <div className='w-screen h-14 bg-primary3 flex justify-between items-center text-primary11'>
            <p className='pl-4'><Link href='/'>redemption.io</Link></p>
            <ul className='flex space-x-7 pr-4'>
                <li>
                    <Link href='/bible'>bible</Link>
                </li>
                <li>
                    <Link href='/notes'>notes</Link>
                </li>
                <li>
                    <Link href='/resources'>resources</Link>
                </li>
                <li>
                    <Link href='/login'>login</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;