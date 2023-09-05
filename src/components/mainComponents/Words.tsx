'use client'

import React, { useEffect, useState } from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import 'react-loading-skeleton/dist/skeleton.css'
import Spinner from '../Spinner';
import Container from './Container';
import MainContainer from './MainContainer';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useEye from '@/hooks/useEye';
import useLanguage from '@/hooks/useLanguage';


function Words() {

    const { showTraslate } = useEye()

    const { isEsp, words, expression} = useLanguage()

    // const [words, setWord] = useState(wordsPt)
    // const [expression, setExpression] = useState(expressionPt)

    const [isLoading, setIsloading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setIsloading(false)
        }, 1000)

        setIsloading(true)
    }, [])

    return (
        <section className='flex items-center mt-8 border-box overflow-x-hidden'>

            <MainContainer>
                {isLoading ? (
                    <div className='flex justify-center items-center flex-1'>
                        <Spinner />
                    </div>

                ) : (
                    <>
                        <Container id='words'>
                            {words.map((all: any, i: number) => (
                                <div key={i} className='flex gap-1 md:gap-3'>
                                    <span>{i + 1}) </span>
                                    <span className='text-green-50'>
                                        <CheckCircleOutlineOutlinedIcon />
                                    </span>
                                    <span className='capitalize'>
                                        {all.word}
                                        <ArrowRightAltIcon />
                                        <span key={i} className={`text-light-500`}>
                                            {showTraslate ? all?.translation : <VisibilityOffIcon />}
                                        </span>
                                    </span>

                                </div>
                            ))}
                        </Container>

                        <Container id='expressions'>
                            {expression.map((all: any, i: number) => (
                                <div key={i} className='flex gap-1 md:gap-3 max-w-[90%]'>
                                    <span>{i + 1}) </span>
                                    <span className='text-purple-50'>
                                        <CheckCircleOutlineOutlinedIcon />
                                    </span>
                                    <span className='capitalize '>
                                        <span className='break-words'>
                                            {all.expression}
                                        </span>
                                        <ArrowRightAltIcon />
                                        <span
                                            key={i}
                                            className='text-light-500'>
                                            {showTraslate ? all.translation : <VisibilityOffIcon />}
                                        </span>
                                    </span>
                                </div>
                            ))}
                        </Container>
                    </>
                )}


            </MainContainer>
        </section>
    )
}

export default Words 