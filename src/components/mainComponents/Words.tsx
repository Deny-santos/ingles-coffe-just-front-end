'use client'

import React, { useEffect, useState } from 'react'
import axios from "axios"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

import 'react-loading-skeleton/dist/skeleton.css'


type Words = {
    word: string[],
}

type Expressions = {
    expression: string[];
}


type Props = {}

function Words({ }: Props) {

    const [words, setWords] = useState<Words[]>([])
    const [expressions, setExpressions] = useState<Expressions[]>([])


    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get('http://localhost:9090/api/words');
                setWords(response.data.words);
                setExpressions(response.data.expressions);
                console.log(response.data.expressions)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getUser()
    }, [])

    return (
        <div className=''>
            <div >
                {words.map((all: Words, i: number) => (
                    <div key={i}>{all.word}</div>
                ))}
            </div>
            <div>
                {expressions.map((all: Expressions, i: number) => (
                    <div key={i}>{all.expression}</div>
                ))}
            </div>

        </div>
    )
}

export default Words