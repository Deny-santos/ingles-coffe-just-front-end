'use client'

import {  useContext, useState } from 'react'
import { LanguageContext } from '@/context/language'
import { expressionPt, wordsPt, acronimosPt } from "../utils/english"
import { acronimosEs, expressionEs, wordsEs } from "../utils/esp"


const useLanguage = () => {

    
    const languageContext = useContext(LanguageContext)

    if (!languageContext) {
        throw new Error('Error: Missing context value');
    }
    
    const { isEsp, setIsEsp, expression, words,setExpression, setWords,acronimos, setAcronimos } = languageContext;

    const handleSetLenguage = () => {
        if(isEsp){
            setWords(wordsEs)
            setExpression(expressionEs)
            setAcronimos(acronimosEs)
            setIsEsp(!isEsp)
        }else{
            setWords(wordsPt)
            setExpression(expressionPt)
            setAcronimos(acronimosPt)
            setIsEsp(!isEsp)
        }
    }

    return {
        isEsp, setIsEsp, handleSetLenguage, words, expression, acronimos
    }
}

export default useLanguage