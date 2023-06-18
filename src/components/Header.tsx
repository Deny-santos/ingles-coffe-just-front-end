'use client'

import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Tooltip from '@mui/material/Tooltip';

import HeaderOPtions from './Logo';
import { Button } from '@mui/material';



type Props = {}

const Header = (props: Props) => {
    return (
        <div className='flex flex-1 text-white absolute w-screen h-[90px] items-center px-10 gap-10 justify-between'>
            <div className='flex'>
                <ToggleButton value="justify" key="justify" >
                    <FormatAlignJustifyIcon sx={{ color: "white", fontSize: "50px" }} />
                </ToggleButton>
            </div>
            <div className=' w-full hidden md:flex'>
                <HeaderOPtions />
            </div>
            <div className='items-center'>
                <Button className={`
                    text-[17px] px-14 bg-white text-blue-500 h-max py-2 font-semibold rounded-md 
                    hover:text-white hover:bg-blue-500
                `}>
                    Começar
                </Button>
            </div>

            <div className='flex  items-center justify-around'>
                <Tooltip title="Veja Minhas Redes Sociais" enterDelay={500} leaveDelay={200}>
                    <Badge badgeContent={1} color="error">
                        <MailIcon color="inherit" sx={{ cursor: "pointer" }} />
                    </Badge>
                </Tooltip>
            </div>
        </div>
    )
}

export default Header