import React from 'react';
import NavBar from '../NavBar';

interface BibleProps {

};

const Bible: React.FC<BibleProps> = () => {
    return (
        <div className='w-screen h-screen bg-primary1'>
            <NavBar/>
        </div>
    );
};

export default Bible;