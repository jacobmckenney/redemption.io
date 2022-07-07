import React from 'react';

interface CardProps {
    children?: JSX.Element | JSX.Element[];
    className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
    return (
        <div className={`flex rounded-lg ${className}`}>
            {children}
        </div>
    );
};

export default Card;