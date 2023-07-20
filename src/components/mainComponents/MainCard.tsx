'use client'

import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

type Props = {
    number: number,
    type: "Palavras" | "Expressões"
    href: string
}
const words = "Aprenda as palavras mais usadas no inglês, começar pela base é importante, portanto veja, e reveja quantas vezes forem necessarias, bons estudos."
const Expressions = "Em inglês, assim como em Português, diversas expressões podem parecer não fazer sentido quando se escuta pela primeira vez, então aqui vai uma ajudinha."

function MainCard({ number, type, href }: Props) {

    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsloading(false)
        },200)

        setIsloading(true)
    }, [])

    return (
        <>
            {isLoading ? (

                <div className={`
                    flex flex-col gap-10
                    w-[300px] h-[400px] rounded-lg p-5
                    bg-dark-150
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
                    flex flex-col gap-10 shadow-dark-150 shadow-2xl
                    w-[300px] h-[400px] rounded-lg p-5
                    bg-gradient-to-br from-gradientDark-50 via-gradientDark-100 to-gradientDark-150
                `}>

                    <div className={`flex items-center justify-evenly`}>
                        <div className={`
                        w-[80px] h-[80px] flex items-center justify-center font-semibold
                        bg-dark-100 text-light-50
                        rounded-full
                        text-[25px]
                    `}>
                            {number}
                        </div>

                        <h3 className={`font-semibold text-[25px] text-light-50`}>{type}</h3>
                    </div>


                    <div className={`
                        flex flex-col gap-10
                    `}>
                        <p className={`text-light-50`}>
                            {type === "Palavras" ? words : Expressions}
                        </p>


                        <div className={`
                            w-full flex items-center justify-end
                        `}>
                            <a href={href} className={`
                                bg-blue-100 text-light-50 py-2 px-14 rounded-lg font-semibold
                            `}>
                                Explorar
                            </a>
                        </div>
                    </div>

                </div >

            )}
        </>
    )
}

export default MainCard