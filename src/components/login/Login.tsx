import React from "react";
import { trpc } from "../../utils/trpc";
import { TabsContent, TabsTrigger, TabsList, Tabs } from "@radix-ui/react-tabs";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { PopoverClose } from "@radix-ui/react-popover";
import Card from "../Card";
import { Cross2Icon } from "@radix-ui/react-icons";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    // const mutation = trpc.useMutation("items.create");
    // const items = trpc.useQuery(["items.all"])

    const submitLogin = async (data: any) => {
        console.log(data);
        try {
            // const res = await mutation.mutateAsync({ ...data });
        } catch (e) {
            console.log(e);
        }
    };

    const submitSignup = async (data: any) => {
        console.log(data);
    };

    return (
        <Card className="bg-primary3 p-5 flex flex-col border border-primary10 w-60">
            <PopoverClose className="flex justify-end w-ful">
                <Cross2Icon className="hover:text-primary9" />
            </PopoverClose>
            <Tabs defaultValue="login" className="w-full">
                <TabsList className="w-full flex justify-center">
                    <TabsTrigger value="login">login</TabsTrigger>
                    <div className="grow" />
                    <TabsTrigger value="signup">signup</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <LoginForm submit={submitLogin} />
                </TabsContent>
                <TabsContent value="signup">
                    <SignupForm submit={submitSignup} />
                </TabsContent>
            </Tabs>
        </Card>
    );
};

export default Login;
