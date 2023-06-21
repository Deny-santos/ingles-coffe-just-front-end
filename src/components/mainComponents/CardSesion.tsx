'use client'

import React from 'react'
import MainCard from './MainCard'

type Props = {}

function CardSesion({ }: Props) {
    return (
        <div className='flex items-center justify-evenly'>
            <MainCard number={1} type='Palavras' />
            <MainCard number={2} type='Expressões' />
        </div>
    )
}

export default CardSesion