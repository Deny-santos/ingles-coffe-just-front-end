import { SvgIconProps } from '@mui/material'
import React from 'react'

type Props = {
    Icon: React.ElementType<SvgIconProps>
    href: string
}

const Icons = ({ Icon, href }: Props) => {

    return (
        <a href={href} target='_blank' className={`
            rounded-md p-4 font-[90px] cursor-pointer duration-500 bg-blue-150 border border-trasparent-50
            hover:border-light-100 hover:bg-trasparent-50
        `}>
            <Icon className='' />
        </a>

    )
}

export default Icons