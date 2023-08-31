import useTheme from '@/hooks/useTheme'
import React from 'react'

type Props = {
    children: React.ReactNode,
}

const MainContainer = ({children}: Props) => {

    const { darkMode } = useTheme()

    return (
        <div
            className={`
                flex flex-col sm:flex-row   bg-blue-100 w-[90%] max-w-[] m-auto gap-1 text-[30px] rounded-2xl 
            `} >
                {children}
            </div>
    )
}

export default MainContainer