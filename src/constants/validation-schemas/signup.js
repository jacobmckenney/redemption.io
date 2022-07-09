import * as yup from "yup";

export const SIGN_UP_SCHEMA = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required()
});