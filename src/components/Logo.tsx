'use client'

import React from 'react'
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';

type Props = {}

const HeaderOPtions = (props: Props) => {
    return (
        <div className='flex flex-row justify-betweeng gap-5 '>
            <div className='logo gap-4 flex text-white'>
                <span><LocalCafeTwoToneIcon className='text-[42px]' /></span>
                <span className='text-[30px] '>Ingles Coffe</span>
            </div>  
        </div>
    )
}

export default HeaderOPtions