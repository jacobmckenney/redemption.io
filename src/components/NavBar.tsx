import Link from "next/link";
import React, { useContext } from "react";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "@radix-ui/react-popover";
import Login from "./login/Login";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import Card from "./Card";
import { Cross2Icon } from "@radix-ui/react-icons";
import { UserContext } from "../context/userContext";
import UserHome from "./user/UserHome";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
    const { id, loggedIn } = useContext(UserContext);

    return (
        <div className="w-screen h-14 bg-primary3 flex justify-between items-center text-primary11">
            <p className="pl-4">
                <Link href="/">redemption.io</Link>
            </p>
            <ul className="flex space-x-7 pr-4">
                <li>
                    <Link href="/bible">bible</Link>
                </li>
                <li>
                    <Link href="/notes">notes</Link>
                </li>
                <li>
                    <Link href="/resources">resources</Link>
                </li>
                <li>
                    <Popover>
                        <PopoverTrigger>
                            <Avatar className="bg-primary1 w-45 h-45 rounded-full p-2">
                                <AvatarFallback>JM</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent>
                            <Card className="bg-primary3 p-5 flex flex-col border border-primary10 w-60">
                                <PopoverClose className="flex justify-end w-ful">
                                    <Cross2Icon className="hover:text-primary9" />
                                </PopoverClose>
                                <div>{id}</div>
                                {loggedIn ? <UserHome /> : <Login />}
                            </Card>
                        </PopoverContent>
                    </Popover>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
