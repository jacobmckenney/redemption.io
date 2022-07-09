import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

interface UserHomeProps {}

const UserHome: React.FC<UserHomeProps> = () => {
    const { setLoggedIn } = useContext(UserContext);
    return (
        <div>
            <p>{"logged in :)"}</p>
            <button className="hover:text-primary9" onClick={() => setLoggedIn(false)}>
                log out
            </button>
        </div>
    );
};

export default UserHome;
