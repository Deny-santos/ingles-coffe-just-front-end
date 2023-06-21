'use client'

import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

type Props = {
    number: number,
    type: "Palavras" | "Expressões"
}
const words = "Nas palavras você pode escolher entre o metodo de ver a Palavra e depois ver a tradução ou ja ter todas as traduções liberadas"
const Expressions = "Nas Expressões você pode escolher entre o metodo de ver a Expressão e depois ver a tradução ou ja ter todas as traduções liberadas"

function MainCard({ number, type }: Props) {

    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false)
        },2000)

        setIsloading(true)
    }, [])

    return (
        <>
            {isLoading ? (

                <div className={`
                    flex flex-col gap-10
                    w-[400px] h-[500px]  rounded-lg p-5
                `}>
                    <SkeletonTheme baseColor="#202020" highlightColor="#444" >
                        <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                            <Skeleton circle height='50px' />
                        </div>
                        <div className='w-[100%]'>
                            <Skeleton count={5} />
                        </div>
                        <div className='w-[100%] flex items-center justify-end'>
                            <div className='w-[30%]'>
                                <Skeleton count={1} />
                            </div>
                        </div>
                    </SkeletonTheme>
                </div>

            ) : (

                <div className={`
                    flex flex-col gap-10
                    w-[300px] h-[400px]  rounded-lg p-5
                    bg-gradient-to-br from-indigo-900 via-red-700 to-purple-600
                `}>

                    <div className={`flex items-center justify-evenly`}>
                        <div className={`
                        w-[80px] h-[80px] flex items-center justify-center font-semibold bg-black text-white rounded-full
                        text-[25px]
                    `}>
                            {number}
                        </div>

                        <h3 className={`font-semibold text-[25px] text-white`}>{type}</h3>
                    </div>


                    <div className={`
                        flex flex-col gap-10
                    `}>
                        <p className='text-white '>{type === "Palavras" ?
                            words : Expressions}
                        </p>


                        <div className={`
                            w-full flex items-center justify-end
                        `}>
                            <button className={`
                                bg-blue-500 text-white py-2 px-14 rounded-lg
                            `}>
                                Ir
                            </button>
                        </div>
                    </div>

                </div >

            )}


        </>
    )
}

export default MainCard