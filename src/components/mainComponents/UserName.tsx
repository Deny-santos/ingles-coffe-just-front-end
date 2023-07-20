import useName from '@/hooks/useName'
import useTheme from '@/hooks/useTheme'
import React from 'react'
import WavingHandIcon from '@mui/icons-material/WavingHand';


const UserName = () => {

    const { name } = useName()
    const { darkMode } = useTheme()

    return (
        <div className='flex max-w-screen items-center justify-end p-5 pr-10 sm:mt-4 mt-10'>
            <span className={`${darkMode ? "text-light-50" : "text-dark-150"} font-semibold text-[22px]`}>
                Olá {name || ""}, seja bem vindo <WavingHandIcon/>
            </span>
        </div>
    )
}

export default UserName