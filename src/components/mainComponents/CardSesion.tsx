import React from 'react'
import MainCard from './MainCard'

function CardSesion() {
    return (
        <div className='flex flex-wrap gap-10 items-center justify-evenly py-5 sm:px-16 px-3'>
            <MainCard href='/main#words' number={1} type='Palavras' />
            <MainCard href='/main#expressions' number={2} type='Expressões' />
        </div>
    )
}

export default CardSesion