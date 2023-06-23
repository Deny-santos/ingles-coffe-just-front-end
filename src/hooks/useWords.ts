'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export type Words = {
    word: string[]
    translate: string[]
}

export type Expressions = {
    expression: string[];
    translation: string[]
}


const useWords = () => {
    const [words, setWords] = useState<Words[]>([])
    const [expressions, setExpressions] = useState<Expressions[]>([])



    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('http://localhost:9090/api/words');
                setWords(response.data.words);
                setExpressions(response.data.expressions);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getUser()
    }, [])
    return {
        expressions, words, setExpressions, setWords 
    }
}

export default useWords