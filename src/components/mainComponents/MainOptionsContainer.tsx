import React from 'react'
import MainOptions from './MainOptions'


function MainOptionsContainer() {

    return (
        <div className='flex sm:hidden  gap-2 justify-around '>
            <div className='fixed flex gap-2 z-10'>
                <MainOptions href='#words' value='Pala..' />
                <MainOptions href='#expressions' value='Expre..' />
                <MainOptions href='#acro' value='Acrô..' />
                <MainOptions href='#text' value='Tex..' />
            </div>
        </div >
    )
}

export default MainOptionsContainer