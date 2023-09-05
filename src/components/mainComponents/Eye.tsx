'use client'

import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useEye from '@/hooks/useEye';


const Eye = () => {

    const {handleSetShowTranlate, setShowTranslate, showTraslate} = useEye()

    return (
        <div className={`
            p-1 flex items-center justify-center rounded-full cursor-pointer
            bg-light-100 border-2 border-light-50 fixed top-24 left-5 bg-trasparent-50
        `}>
            <div 
            className={`
                sm:w-14 sm:h-14 w-10 h-10 text-light-50
                flex items-center justify-center rounded-full duration-150
                ${showTraslate ? "bg-green-50": "bg-gradientDark-100"}
            `} 
            onClick={() => setShowTranslate(!showTraslate)}>
                {showTraslate ? <VisibilityIcon /> : <VisibilityOffIcon/>}
        </div>
        </div>
    )
}

export default Eye