'use client'

import React from 'react'
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';

type Props = {}

const Logo = (props: Props) => {
    return (
        <div className='flex flex-row justify-between items-center '>
            <div className='logo gap-4 flex text-white'>
                <span><LocalCafeTwoToneIcon className='text-[42px]' /></span>
                <span className='text-[30px] '>Ingles Coffe</span>
            </div>  
        </div>
    )
}

export default Logo