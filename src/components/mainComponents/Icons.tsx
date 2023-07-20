import { SvgIconProps } from '@mui/material'
import React from 'react'

type Props = {
    Icon: React.ElementType<SvgIconProps>
}

const Icons = ({ Icon }: Props) => {

    return (
        <a className={`
            rounded-md p-4 font-[90px] cursor-pointer duration-500 bg-blue-150 border border-trasparent-50
            hover:border-light-100 hover:bg-trasparent-50
        `}>
            <Icon className='' />
        </a>

    )
}

export default Icons