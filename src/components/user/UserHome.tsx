import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

interface UserHomeProps {}

const UserHome: React.FC<UserHomeProps> = () => {
    const { setId } = useContext(UserContext);
    return (
        <div>
            <p>{"logged in :)"}</p>
            <button className="hover:text-primary9" onClick={() => setId("")}>
                log out
            </button>
        </div>
    );
};

export default UserHome;
