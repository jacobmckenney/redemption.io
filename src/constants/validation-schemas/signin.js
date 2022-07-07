import * as yup from "yup";

export const SIGNIN_SCHEMA = yup.object().shape({
    user: yup.string().required(),
    password: yup.string().min(6).max(16).required()
});