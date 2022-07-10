import React, { useState, useContext } from "react";
import { trpc } from "../../utils/trpc";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { UserContext } from "../../context/userContext";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const signin = trpc.useMutation("user.signup");
    const { id, setId } = useContext(UserContext);
    const login = trpc.useQuery(["user.login", data], {
        onSuccess: (data) => {
            if (data?.id && data?.id !== "") setId(data?.id as string);
        },
    });
    const [showLogin, setShowLogin] = React.useState(true);

    const submitLogin = async (data: any) => {
        setData(data);
    };

    const submitSignup = async (data: any) => {
        try {
            delete data.confirmPassword;
            const res = await signin.mutateAsync({ ...data });
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <p>{id}</p>
            <p>{JSON.stringify(login?.status)}</p>
            {showLogin ? <LoginForm submit={submitLogin} /> : <SignupForm submit={submitSignup} />}
            <div className="w-full flex justify-end hover:text-primary9 cursor-pointer text-xs">
                <p onClick={() => setShowLogin(!showLogin)}>{showLogin ? "don't have an account?" : "back to login"}</p>
            </div>
        </>
    );
};

export default Login;
