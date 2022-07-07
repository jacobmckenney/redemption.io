import React from 'react';
import { FieldValues } from "react-hook-form";

interface LabeledInputProps {
    children?: JSX.Element | JSX.Element[] | string;
    name: string;
    errors?: FieldValues;
    register?: any;
};

const LabeledInput: React.FC<LabeledInputProps> = ({ children, name, errors, register }) => {
    return (
        <div className='my-2'>
            <label className="mr-2" htmlFor={name}>{children}</label>
            <input type="text" id={name} {...register(name)} />
            {errors && errors[name] && <p>{errors[name].message}</p>}
        </div>
    );
};

export default LabeledInput;