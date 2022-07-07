import React from 'react';
import Card from "../Card";
import * as rhf from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_ITEM_SCHEMA } from "../../constants/validation-schemas/create-item";
import LabeledInput from '../LabeledInput';
import{ trpc } from '../../utils/trpc';
import NavBar from '../NavBar';

interface LoginProps {

};

const Login: React.FC<LoginProps> = () => {

    const mutation = trpc.useMutation('items.create');
    const items = trpc.useQuery(['items.all']);
    const submit = async (data: any) => {
        console.log({...data});
        try {
            const res = await mutation.mutateAsync({...data});
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };
    const { register, handleSubmit, formState: { errors } } = rhf.useForm({resolver: yupResolver(CREATE_ITEM_SCHEMA)});

    return (
        <div className='w-screen, h-screen bg-primary1 text-primary11 flex-col items-center'>
            <NavBar/>
            <p>{items.status === 'loading' && 'loading'}</p>
            <p>{items.data && JSON.stringify(items.data)}</p>
            <h1>Sign In!</h1>
            <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center'>
                <LabeledInput name="name" errors={errors} register={register} >Name</LabeledInput>
                <LabeledInput name="make" errors={errors} register={register} >Make</LabeledInput>
                <LabeledInput name="description" errors={errors} register={register} >Description</LabeledInput>
                <LabeledInput name="price" errors={errors} register={register} >Price</LabeledInput>
                <LabeledInput name="quantity" errors={errors} register={register} >Quantity</LabeledInput>
                <button type="submit">Submit!</button>
            </form>
        </div>
    );
};

export default Login;