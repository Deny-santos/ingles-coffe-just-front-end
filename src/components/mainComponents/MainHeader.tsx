import React from 'react'
import Bars from '../Bars'
import MyToggleButton from '../MyToggleButton'
import useMenuBars from '@/hooks/useMenuBars'
import Logo from '../Logo'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import useTheme from '@/hooks/useTheme'
import useLanguage from '@/hooks/useLanguage'

const MainHeader = () => {

    const { setShowBars, showBars} = useMenuBars()
    
    const { darkMode, handleSetDarkMode } = useTheme()

    const {isEsp} = useLanguage()

    return (
        <header 
            className={`flex items-center gap-6 px-4 fixed top-0 w-[100vw] backdrop-blur-md z-20`} 
            onClick={() => showBars? setShowBars(!showBars): ""}>
                <span className='relative z-10'>
                    <MyToggleButton isLight={!darkMode} />
                </span>
                <div>
                    <Logo path='/main' isLight={!darkMode}/>
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
                <span className='text-light-300 text-sm'>{!isEsp ? "actualizado en": "atualizado em"} 18/09/23</span>
        </header>
    )
}

export default MainHeader