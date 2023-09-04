'use client'

import {  useContext } from 'react'
import { EyeContext } from '@/context/eye'


const useEye = () => {

    
    const eyeContext = useContext(EyeContext)

    if (!eyeContext) {
        throw new Error('Error: Missing context value');
    }
    
    const { showTraslate, setShowTranslate } = eyeContext;


    const handleSetShowTranlate = () => {
        setShowTranslate(!showTraslate)
    }

    return {
        showTraslate, setShowTranslate, handleSetShowTranlate
    }
}

export default useEye