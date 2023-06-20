'use client'

import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type BarContextType = {
    showBars: boolean;
    setShowBars: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BarContext = createContext<BarContextType | undefined>(undefined);

export const BarProvider = (props: Props) => {
    const { children } = props;

    const [showBars, setShowBars] = useState(false);

    return (
        <BarContext.Provider value={{ showBars, setShowBars }}>
            {children}
        </BarContext.Provider>
    );
};
