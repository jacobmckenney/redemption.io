import Link from 'next/link';
import React from 'react';
import { HEBREWS9_13_15 } from '../../constants/bible-verses';
import NavBar from '../NavBar';

interface HomeProps {

};

const Home: React.FC<HomeProps> = () => {
    return (
        <div className='w-screen h-screen bg-primary1 text-primary11'>
            <NavBar/>
            <div className='w-full flex flex-col items-center'>
                <p className=' max-w-2xl pt-8'>{HEBREWS9_13_15}</p>
                <p>- Hebrews 9:13-15</p>
            </div>
        </div>
    );
};

export default Home;