'use client'

import React, { useEffect, useState } from 'react'
import axios from "axios"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

import 'react-loading-skeleton/dist/skeleton.css'
import useTheme from '@/hooks/useTheme';


type Words = {
    word: string[]
    translate: string[]
}

type Expressions = {
    expression: string[];
    traslate: string[]
}


type Props = {}

function Words({ }: Props) {

    const [words, setWords] = useState<Words[]>([])
    const [expressions, setExpressions] = useState<Expressions[]>([])

    const { darkMode } = useTheme()


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
        <section className='flex items-center mt-20 '>
            <div className='flex bg-blue-100 w-[90%] m-auto gap-4 text-[30px] rounded-2xl'>

                <div 
                    id='words'
                    className={`
                    flex-1 p-3 border border-blue-100 rounded-s-2xl
                    ${darkMode ? "bg-dark-100 text-light-50": "bg-light-200"} 
                `} >
                    {words.map((all: Words, i: number) => (
                        <div key={i}>
                            {i+1})  {all.word} : {all.translate}
                        </div>
                    ))}
                </div>
                
                <div 
                    id='expresions'
                    className={`
                    flex-1 p-3 text-[30px] border border-blue-100 rounded-e-2xl
                    ${darkMode ? "bg-dark-100 text-light-50": "bg-light-200"}
                `}>
                    {expressions.map((all: Expressions, i: number) => (
                        <div key={i}>
                            {all.expression}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Words