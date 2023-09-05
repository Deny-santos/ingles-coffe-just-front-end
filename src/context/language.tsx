'use client'

import { expressionPt, wordsPt } from "@/utils/english";
import { acronimosPt } from "@/utils/english/acronimos";
import React, { createContext, useState } from "react";

type Props = {
    children: React.ReactNode;
};

type LanguageContextType = {
    isEsp: boolean;
    setIsEsp: React.Dispatch<React.SetStateAction<boolean>>;
    words: any
    setWords: React.Dispatch<React.SetStateAction<any>>;
    expression: any
    setExpression: React.Dispatch<React.SetStateAction<any>>;
    acronimos: any
    setAcronimos: React.Dispatch<React.SetStateAction<any>>;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = (props: Props) => {
    const { children } = props;

    const [isEsp, setIsEsp] = useState(true);
    const [words, setWords] = useState(wordsPt)
    const [expression, setExpression] = useState(expressionPt)
    const [acronimos, setAcronimos] = useState(acronimosPt)

    return (
        <LanguageContext.Provider value={{ isEsp, setIsEsp, expression, words, setExpression, setWords,acronimos, setAcronimos }}>
            {children}
        </LanguageContext.Provider>
    );
};
