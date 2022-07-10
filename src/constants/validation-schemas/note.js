import * as yup from "yup";

export const NOTE_SCHEMA = yup.object().shape({
    title: yup.string(),
    content: yup.string(),
})