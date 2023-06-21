'use client'

import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type DarkModeContextType = {
    darkMode: boolean;
    setDarkMode: any
};

export const DarkContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkProvider = (props: Props) => {
    const { children } = props;

    const [darkMode, setDarkMode] = useState(true);


    return (
        <DarkContext.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkContext.Provider>
    );
};
