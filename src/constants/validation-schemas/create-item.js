import * as yup from "yup";

export const CREATE_ITEM_SCHEMA = yup.object().shape({
    name: yup.string().required(),
    make: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().required(),
    quantity: yup.number().positive().required()
});