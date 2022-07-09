import * as yup from "yup";

export const LOG_IN_SCHEMA = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
});