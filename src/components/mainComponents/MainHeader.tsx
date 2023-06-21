'use client'

import React from 'react'
import Bars from '../Bars'
import MyToggleButton from '../MyToggleButton'
import useMenuBars from '@/hooks/useMenuBars'
import Logo from '../Logo'

type Props = {}

const MainHeader = (props: Props) => {

    const {handleShowMenu, setShowBars, showBars} = useMenuBars()

    return (
        <header 
            className={`flex items-center`} 
            onClick={() => showBars? setShowBars(!showBars): ""}>
                <span className='relative z-10'>
                    <MyToggleButton />
                </span>
                <div>
                    <Logo/>
                </div>
                <Bars />
        </header>
    )
}

export default MainHeader