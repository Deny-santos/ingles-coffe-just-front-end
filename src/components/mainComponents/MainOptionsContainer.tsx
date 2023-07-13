'use client'

import React, {useState} from 'react'
import MainOptions from './MainOptions'
import useReverseWord from '@/hooks/useReverseWord';

type Props = {}

function MainOptionsContainer({ }: Props) {

    const {setReverse, handleSetReverse, reverse } = useReverseWord()

    return (
        <div className='flex sm:hidden  gap-2 justify-around '>
            <div className='fixed flex gap-3 z-30'>
                <MainOptions href='#words' value='Palavras' />
                <MainOptions href='#expressions' value='Expressões' />
            </div>
        </div >
    )
}

export default MainOptionsContainer