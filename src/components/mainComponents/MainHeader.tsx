'use client'

import React from 'react'
import Bars from '../Bars'
import MyToggleButton from '../MyToggleButton'
import useMenuBars from '@/hooks/useMenuBars'
import Logo from '../Logo'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import useTheme from '@/hooks/useTheme'

type Props = {}

const MainHeader = (props: Props) => {

    const { setShowBars, showBars} = useMenuBars()
    
    const { darkMode, handleSetDarkMode } = useTheme()

    return (
        <header 
            className={`flex items-center gap-6 px-4 fixed top-0 w-[100vw] backdrop-blur-md z-20`} 
            onClick={() => showBars? setShowBars(!showBars): ""}>
                <span className='relative z-10'>
                    <MyToggleButton isLight={!darkMode} />
                </span>
                <div>
                    <Logo isLight={!darkMode}/>
                </div>
                <Bars />
                <span >
                    {darkMode ? 
                        <span onClick={handleSetDarkMode}>
                            <WbSunnyOutlinedIcon className='text-yellows-50 text-[25px] cursor-pointer'/>
                        </span> : 
                        <span onClick={handleSetDarkMode}>
                            <NightlightOutlinedIcon className='text-blue-100 text-[25px] cursor-pointer'/>
                        </span>
                    }
                </span >
        </header>
    )
}

export default MainHeader