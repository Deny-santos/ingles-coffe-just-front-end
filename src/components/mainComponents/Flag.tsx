import useLanguage from '@/hooks/useLanguage'
import useTheme from '@/hooks/useTheme'
import Image from 'next/image'
import React from 'react'
import { brazil, spain } from "../../../public"

type Props = {}

const Flag = (props: Props) => {

    const { handleSetLenguage, isEsp } = useLanguage()
    const { darkMode } = useTheme()

    return (
        <>
            <button
                onClick={handleSetLenguage}
                className={`
                    w-12 fixed top-16 right-9 bg-blue-50 p-1 rounded-md
                    text-light-150
                `}>
                {!isEsp ? <Image alt='flag' className='max-h-full max-w-full' src={spain}/> : <Image alt='flag' className='max-h-full max-w-full' src={brazil}/>}
            </button>
        </>
    )
}

export default Flag