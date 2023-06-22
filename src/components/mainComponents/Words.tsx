'use client'

import React, { useEffect, useState } from 'react'
import axios from "axios"
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import 'react-loading-skeleton/dist/skeleton.css'
import useTheme from '@/hooks/useTheme';
import useWords, { Words, Expressions } from '@/hooks/useWords';



type Props = {}

function Words({ }: Props) {

    const { darkMode } = useTheme()
    const { animated, expressions, words }  = useWords()

    return (
        <section className='flex items-center mt-20 '>
            <div className='flex bg-blue-100 w-[90%] m-auto gap-1 text-[30px] rounded-2xl gap '>

                <div 
                    id='words'
                    className={`
                    flex flex-col flex-1 p-3 border border-blue-100 rounded-s-2xl gap-5
                    ${darkMode ? animated ? "animation-focus": "bg-dark-100 text-light-50" : 
                    animated ? "animation-focus": "bg-light-200 text-dark-50"} 
                    
                `} >
                    {words.map((all: Words, i: number) => (
                        <div key={i} className='flex gap-3'>
                            <span className='text-green-50'>
                                <CheckCircleOutlineOutlinedIcon />
                            </span>
                            <span className='capitalize'>
                                {all.word} 
                                <ArrowRightAltIcon/> 
                                <span className='text-light-500'>{all.translate}</span>
                            </span>
                            
                        </div>
                    ))}
                </div>
                
                <div 
                    id='expressions'
                    className={`
                    flex flex-col flex-1 p-3 text-[30px] border border-blue-100 rounded-e-2xl gap-9 flex-wrap
                    ${darkMode ? "bg-dark-100 text-light-50": "bg-light-200"}
                `}>
                    {expressions.map((all: Expressions, i: number) => (
                        <div key={i} className='flex gap-3'>
                            <span className='text-purple-50'>
                                <CheckCircleOutlineOutlinedIcon />
                            </span>
                            <span className='capitalize'>
                                {all.expression} 
                                <ArrowRightAltIcon/> 
                                <span className='text-light-500'>{all.translation}</span>
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Words 