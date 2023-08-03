import React from 'react'
import LocalCafeTwoToneIcon from '@mui/icons-material/LocalCafeTwoTone';

type Props = {
    isLight?: boolean
    path?: string
}

const Logo = ({isLight, path}: Props) => {
    return (
        <a href={path || "#"} className='flex flex-row justify-between items-center '>
            <div className={`
                logo gap-4 flex items-center
                ${isLight ? "text-dark-100" : "text-light-50"}
            `}>
                <span><LocalCafeTwoToneIcon className='text-[42px]' /></span>
                <span className='sm:text-[30px] md:text-[25px] text-[20px] '>Inglês Coffee</span>
            </div>  
        </a>
    )
}

export default Logo