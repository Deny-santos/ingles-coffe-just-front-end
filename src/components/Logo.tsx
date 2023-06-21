'use client'

import React from 'react'
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';

type Props = {
    isLight?: boolean
}

const Logo = ({isLight}: Props) => {
    return (
        <div className='flex flex-row justify-between items-center '>
            <div className={`
                logo gap-4 flex items-center
                ${isLight ? "text-dark-100" : "text-light-50"}
            `}>
                <span><LocalCafeTwoToneIcon className='text-[42px]' /></span>
                <span className='text-[30px] '>Ingles Coffe</span>
            </div>  
        </div>
    )
}

export default Logo