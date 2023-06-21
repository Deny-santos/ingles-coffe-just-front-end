'use client'

import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type UserContextType = {
    name: string;
    // isLogged: React.Dispatch<React.SetStateAction<boolean>>;
    setName: any;
    email: string;
    setEmail: any;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = (props: Props) => {
    const { children } = props;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")

    return (
        <UserContext.Provider value={{ name, setName, email, setEmail }}>
            {children}
        </UserContext.Provider>
    );
};
