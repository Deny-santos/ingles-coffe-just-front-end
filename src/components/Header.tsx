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



type Props = {}

const Header = (props: Props) => {

    const {handleShowMenu} = useMenuBars()

    return (
        <div className={`
            flex flex-1 text-white absolute w-screen h-[90px] 
            items-center px-5 sm:px-10 sm:gap-10 gap-3 justify-between max-w-[100vw]
        `}>
            <div className='flex' onClick={handleShowMenu}>
                <ToggleButton value="justify" key="justify" >
                    <FormatAlignJustifyIcon sx={{ color: "white", fontSize: "50px" }} />
                </ToggleButton>
            </div>
            <div className='w-full hidden md:flex'>
                <Logo />
            </div>
            <div className='items-center'>
                <a
                    href="/main"
                    className={`
                        text-[13px] sm:text-[20px]  px-8 sm:px-8 bg-blue-500 text-white h-max max-w-[100%] font-semibold rounded-md
                        py-3
                    `}>
                    Começar
                </a>
            </div>

            <div className='flex  items-center justify-around'>
                <Tooltip title="Veja Minhas Redes Sociais" enterDelay={500} leaveDelay={200}>
                    <Badge badgeContent={1} color="primary">
                        <MailIcon color="inherit" sx={{ cursor: "pointer" }} />
                    </Badge>
                </Tooltip>
            </div>
        </div>
    )
}

export default Header