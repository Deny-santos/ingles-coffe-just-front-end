import React from 'react'
import MainOptions from './MainOptions'


function MainOptionsContainer() {

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