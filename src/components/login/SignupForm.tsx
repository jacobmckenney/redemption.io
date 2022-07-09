import React from "react";
import * as rhf from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LabeledInput from "../LabeledInput";
import { SIGN_UP_SCHEMA } from "../../constants/validation-schemas/signup";

interface SignupFormProps {
    submit: any;
}

const SignupForm: React.FC<SignupFormProps> = ({ submit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = rhf.useForm({ resolver: yupResolver(SIGN_UP_SCHEMA) });

    return (
        <form onSubmit={handleSubmit(submit)}>
            <LabeledInput name="username" errors={errors} register={register}>
                Username:
            </LabeledInput>
            <LabeledInput name="password" type="password" errors={errors} register={register}>
                Password:
            </LabeledInput>
            <LabeledInput
                name="confirmPassword"
                type="password"
                errors={errors}
                customError="Passwords must match"
                register={register}
            >
                Confirm Password:
            </LabeledInput>
            <button type="submit">signup</button>
        </form>
    );
};

export default SignupForm;
