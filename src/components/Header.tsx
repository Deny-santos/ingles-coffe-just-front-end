'use client'

import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Tooltip from '@mui/material/Tooltip';

import Logo from './Logo';
import { Button } from '@mui/material';
import useMenuBars from '@/hooks/useMenuBars';
import MyToggleButton from './MyToggleButton';



type Props = {}

const Header = (props: Props) => {

    const {handleShowMenu} = useMenuBars()

    return (
        <div className={`
            flex flex-1 text-white absolute w-screen h-[90px] 
            items-center px-5 sm:px-10 sm:gap-10 gap-3 justify-between max-w-[100vw]
        `}>
            <div className='z-10'>
                <MyToggleButton/>
            </div>
            <div className='w-full hidden md:flex'>
                <Logo />
            </div>
            <div className='items-center'>
                <a
                    href="/main"
                    className={`
                        text-[13px] sm:text-[20px]  px-8 sm:px-8 bg-blue-100 text-light-50 h-max max-w-[100%] font-semibold rounded-md
                        py-3
                    `}>
                    Começar
                </a>
            </div>

            <div className='flex  items-center justify-around'>
                <Tooltip title="Veja Minhas Redes Sociais" enterDelay={500} leaveDelay={200}>
                    <Badge badgeContent={1} color="primary">
                        <MailIcon sx={{ cursor: "pointer", color: "white" }} />
                    </Badge>
                </Tooltip>
            </div>
        </div>
    )
}

export default Header