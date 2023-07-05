'use client'

import {  useContext } from 'react'
import { ReverseContext } from '@/context/reverse'


const useReverseWord = () => {

    
    const reverseContext = useContext(ReverseContext)

    if (!reverseContext) {
        throw new Error('Error: Missing context value');
    }
    
    const { reverse, setReverse } = reverseContext;


    const handleSetReverse = () => {
        setReverse(!reverse)
    }

    return {
        reverse, setReverse, handleSetReverse
    }
}

export default useReverseWord