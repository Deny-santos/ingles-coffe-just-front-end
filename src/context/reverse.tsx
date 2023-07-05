'use client'

import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type ReverseContextType = {
    reverse: boolean;
    setReverse: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ReverseContext = createContext<ReverseContextType | undefined>(undefined);

export const ReverseProvider = (props: Props) => {
    const { children } = props;

    const [reverse, setReverse] = useState(false);

    return (
        <ReverseContext.Provider value={{ reverse, setReverse }}>
            {children}
        </ReverseContext.Provider>
    );
};
