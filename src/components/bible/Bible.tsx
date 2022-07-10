import React from "react";
import { trpc } from "../../utils/trpc";
import NavBar from "../NavBar";

interface BibleProps {}

const Bible: React.FC<BibleProps> = () => {
    const users = trpc.useQuery(["user.all"]);
    return (
        <div className="w-screen h-screen bg-primary1">
            <NavBar />
            <p className="text-error">{JSON.stringify(users?.data)}</p>
        </div>
    );
};

export default Bible;
