'use client'

import {  useContext } from 'react'
import { DarkContext } from '@/context/theme'


const useTheme = () => {

    const darkContext = useContext(DarkContext)

    if (!darkContext) {
        throw new Error('Error: Missing context value');
    }
    
    const { darkMode, setDarkMode } = darkContext

    const handleSetDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return {
        darkMode, setDarkMode, handleSetDarkMode
    }
}

export default useTheme