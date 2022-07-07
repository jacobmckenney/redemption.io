import React from 'react';
import NavBar from '../NavBar';

interface ResourcesProps {

};

const Resources: React.FC<ResourcesProps> = () => {
    return (
        <div className='w-screen h-screen bg-primary1'>
            <NavBar/>
        </div>
    );
};

export default Resources;