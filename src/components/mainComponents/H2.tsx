import useTheme from '@/hooks/useTheme';
import React from 'react'

type Props = {
    text: string;
}

const H2 = ({ text }: Props) => {

    const { darkMode } = useTheme()

    return (
        <>
            <h2 
                className={`
                    mt-5 mb-3 text-center text-[28px] ${darkMode ? "text-light-100" : "text-dark-100"}
                `}>
                    {text}
            </h2>
        </>
    )
}

export default H2