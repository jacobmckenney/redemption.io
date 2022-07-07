import React from 'react';
import NavBar from '../NavBar';

interface NotesProps {

};

const Notes: React.FC<NotesProps> = () => {
    return (
        <div className='w-screen h-screen bg-primary1'>
            <NavBar/>
        </div>
    );
};

export default Notes;