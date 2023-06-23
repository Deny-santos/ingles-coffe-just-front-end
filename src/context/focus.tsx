'use client'

import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type FocusContextType = {
    wordAnimated: boolean;
    setWordAnimated: any;
    expressionsAnimated: boolean;
    setExpressionsAnimated: any;
};

export const FocusContext = createContext<FocusContextType | undefined>(undefined);

export const FocusProvider = (props: Props) => {
    const { children } = props;

    const [wordAnimated, setWordAnimated] = useState(false)
    const [expressionsAnimated, setExpressionsAnimated] = useState(false)

    return (
        <FocusContext.Provider value={{ expressionsAnimated, setExpressionsAnimated, wordAnimated, setWordAnimated}}>
            {children}
        </FocusContext.Provider>
    );
};
