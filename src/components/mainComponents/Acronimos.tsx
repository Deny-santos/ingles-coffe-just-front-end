import React from 'react'
import MainContainer from './MainContainer'
import Container from './Container'
import { acronimos } from "@/utils/english/acronimos"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CircleIcon from '@mui/icons-material/Circle';

type Props = {}

const Acronimos = (props: Props) => {
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
                                <span className='text-light-500'>{all.mean}</span>
                                <span className='px-4'>< CircleIcon className='text-[10px]'/></span>
                                <span className='text-light-500'>{all.translation}</span>
                            </span>

                        </div>
                    ))}
                </Container>
            </MainContainer >
        </>
    )
}

export default Acronimos