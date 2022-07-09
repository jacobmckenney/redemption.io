import * as yup from "yup";

export const LOG_IN_SCHEMA = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});