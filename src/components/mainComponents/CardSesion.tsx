'use client'

import React from 'react'
import MainCard from './MainCard'

type Props = {}

function CardSesion({ }: Props) {
    return (
        <div className='flex flex-wrap gap-10 items-center justify-evenly py-5 sm:px-16 px-3'>
            <MainCard href='/main#words' number={1} type='Palavras' />
            <MainCard href='/main#expresions' number={2} type='Expressões' />
        </div>
    )
}

export default CardSesion