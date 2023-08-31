import React from 'react'
import MyToggleButton from './MyToggleButton';
import useMenuBars from '@/hooks/useMenuBars';
import LiMenuBars from './LiMenuBars';
import TranslateIcon from '@mui/icons-material/Translate';
import RecordVoiceOverSharpIcon from '@mui/icons-material/RecordVoiceOverSharp';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import HomeIcon from '@mui/icons-material/Home';
import Image from 'next/image';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

import { svgBars } from '../../public';

const Bars = () => {

        const { handleShowMenu, showBars } = useMenuBars()

        return (
                <div className={` 
                        duration-700 flex flex-col absolute top-0  py-4 overflow-hidden bg-blue-150
                        ${showBars ? "left-0" : "left-[-1000px]"} min-h-screen  w-[80%] md:w-[500px] z-50
                `}>
                        <div className='ml-10 -mt-2' onClick={handleShowMenu}>
                                <MyToggleButton />
                        </div>
                        <ul className={`w-full flex h-full flex-col justify-evenly mt-4 z-20`}>
                                <LiMenuBars href='/'>
                                        <HomeIcon />
                                        <span>Home</span>
                                </LiMenuBars>

                                <LiMenuBars href='main#words'>
                                        <TranslateIcon />
                                        <span>Palavras</span>
                                </LiMenuBars>

                                <LiMenuBars href='main#expressions'>
                                        <RecordVoiceOverSharpIcon />
                                        <span>Expressões</span>
                                </LiMenuBars>

                                <LiMenuBars href='main#text'>
                                        <FormatColorTextIcon />
                                        <span>Textos</span>
                                </LiMenuBars>

                                <LiMenuBars href='main#footer'>
                                        <CallOutlinedIcon />
                                        <span>Contatos</span>
                                </LiMenuBars>
                        </ul>
                        <div className='absolute top-0 bg-[#09090952] h-full left-0 flex items-end z-10'>
                                <Image src={svgBars} alt='svg do menu' className='relative z-0 max-w-full ml-16' />
                        </div>
                </div>
        )
}

export default Bars