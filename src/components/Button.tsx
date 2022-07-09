import React from 'react';

interface ButtonProps {
    children?: JSX.Element | JSX.Element[] | string;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, type, className }) => {
    return (
        <button type={type} className={`${className} bg-primary11 text-primary1 rounded-xl hover:bg-primary9 p-1`}>
            {children}
        </button>
    );
};

export default Button;