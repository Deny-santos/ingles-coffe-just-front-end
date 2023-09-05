"use client"

import React, { useState } from 'react'
import MainContainer from './MainContainer'
import Container from './Container'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import useEye from '@/hooks/useEye'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useLanguage from '@/hooks/useLanguage'

const Acronimos = () => {

    const { showTraslate } = useEye()
    const { acronimos } = useLanguage()

    return (
        <>
            <MainContainer>
                <Container id='acro'>
                    {acronimos.map((all: any, i: number) => (
                        <div key={i} className='flex gap-1 md:gap-3'>
                            <span>{i + 1}) </span>
                            <span className='text-gradientDark-100'>
                                <CheckCircleOutlineOutlinedIcon />
                            </span>
                            <span className='capitalize'>
                                {all.acronimo}
                                <ArrowRightAltIcon />
                                <span className='text-light-500'>{showTraslate ? all.mean : <VisibilityOffIcon/>}</span>
                                <span className='px-4'>< CircleIcon className='text-[10px]' /></span>
                                <span className='text-light-500'>{showTraslate ? all.translation: <VisibilityOffIcon/>}</span>
                            </span>

                        </div>
                    ))}
                </Container>
            </MainContainer >
        </>
    )
}

export default Acronimos