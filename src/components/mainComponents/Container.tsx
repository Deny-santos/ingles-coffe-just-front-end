import useTheme from '@/hooks/useTheme'
import React from 'react'

type Props = {
    children: React.ReactNode
    id?: string
}

const Container = ({children, id}: Props) => {

    const { darkMode } = useTheme()

    return (
        <div
            id={id}
            className={`
                text-[18px] md:text-[21px] lg:text-[25px]
                flex flex-col flex-1 p-3 border border-blue-100 rounded-s-2xl gap-5
                ${darkMode ? "bg-dark-100 text-light-50" : "bg-light-200 text-dark-50"} 
            `} >
                {children}
            </div>
    )
}

export default Container