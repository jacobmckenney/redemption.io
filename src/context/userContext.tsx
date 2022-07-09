import React, { createContext, useContext, useMemo, useState } from "react";

interface UserProviderProps {
    children?: JSX.Element | JSX.Element[];
}

interface UserContextType {
    id: string;
    setId: any;
    loggedIn: boolean;
    setLoggedIn: any;
}

export const UserContext = createContext<UserContextType>({
    id: "",
    setId: () => {},
    loggedIn: false,
    setLoggedIn: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [id, setId] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    let values = useMemo(() => ({ id, setId, loggedIn, setLoggedIn }), [id, setId, loggedIn, setLoggedIn]);

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
