import React from 'react'
import MainCard from './MainCard'
import useLanguage from '@/hooks/useLanguage'

function CardSesion() {

    const {isEsp} = useLanguage()

    return (
        <div className='flex flex-wrap gap-10 items-center justify-evenly py-5 sm:px-16 px-3'>
            <MainCard
                href='/main#words'
                number={1}
                title={`${!isEsp ? "palabras y expresiones" : "Palavras e expressoes"}`} 
                text={`${!isEsp ? "Mejora tu vocabulario con palabras y expresiones mas comunes" : "Melhorar seu vocabulario com palavras e expressões mais usadas do inglês"}`}/>

            <MainCard
                href='/main#text'
                number={2}
                title='Textos' 
                text={`${!isEsp? "aprovecha los textos de niveles diferentes: A1, A2, B1, B2, C1, C2." : "Leia textos em diferentes níveis, A1, A2, B1, B2, C1, C2."}`}/>
        </div>
    )
}

export default CardSesion