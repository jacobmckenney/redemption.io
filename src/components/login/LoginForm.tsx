import React from "react";
import * as rhf from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOG_IN_SCHEMA } from "../../constants/validation-schemas/login";
import LabeledInput from "../LabeledInput";

interface LoginFormProps {
    submit: any;
}

const LoginForm: React.FC<LoginFormProps> = ({ submit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = rhf.useForm({ resolver: yupResolver(LOG_IN_SCHEMA) });

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center">
            <LabeledInput name="email" errors={errors} register={register}>
                email:
            </LabeledInput>
            <LabeledInput name="password" type="password" errors={errors} register={register}>
                password:
            </LabeledInput>
            <div className="flex w-full space-between">
                <button type="submit">login</button>
            </div>
        </form>
    );
};

export default LoginForm;
