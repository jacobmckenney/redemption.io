import React from "react";
import { FieldValues } from "react-hook-form";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { capitalize } from "../utils/helpers";

interface LabeledInputProps {
    children?: JSX.Element | JSX.Element[] | string;
    name: string;
    errors?: FieldValues;
    customError?: string;
    register?: any;
    type?: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({ children, name, errors, customError, register, type }) => {
    return (
        <div className="my-2">
            <label className="mr-2" htmlFor={name}>
                {children}
            </label>
            <input className="bg-primary1" type={type ? type : "text"} id={name} {...register(name)} />
            {errors && errors[name] && (
                <div className="flex text-error justify-start items-center text-xs mt-2">
                    <ExclamationTriangleIcon className="mr-2" />
                    <p>{customError ? customError : capitalize(errors[name].message)}</p>
                </div>
            )}
        </div>
    );
};

export default LabeledInput;
