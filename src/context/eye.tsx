'use client'

import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type EyeContextType = {
    showTraslate: boolean;
    setShowTranslate: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EyeContext = createContext<EyeContextType | undefined>(undefined);

export const EyeProvider = (props: Props) => {
    const { children } = props;

    const [showTraslate, setShowTranslate] = useState(true);

    return (
        <EyeContext.Provider value={{ showTraslate, setShowTranslate }}>
            {children}
        </EyeContext.Provider>
    );
};
