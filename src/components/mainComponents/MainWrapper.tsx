'use client'

import React from 'react'
import MainHeader from "@/components/mainComponents/MainHeader"
import Words from "@/components/mainComponents/Words"
import UserName from "@/components/mainComponents/UserName"
import CardSesion from "@/components/mainComponents/CardSesion"
import useTheme from "@/hooks/useTheme"
import MainFooter from './MainFooter'
import useMenuBars from '@/hooks/useMenuBars'
import MainOptionsContainer from './MainOptionsContainer'


function MainWrapper() {

    const { darkMode } = useTheme()
    const { setShowBars, showBars } = useMenuBars()

    return (
        <main
            onClick={() => showBars ? setShowBars(false) : ""}
            className={`
            min-h-screen max-w-[100vw] pt-20 overflow-x-hidden
            ${darkMode ? "bg-dark-100" : "bg-light-200"}
            `}
            style={{ scrollBehavior: "smooth" }}
        >
            <MainHeader />
            <MainOptionsContainer />
            <UserName />
            <CardSesion />
            <Words />
            <MainFooter />
        </main>
    )
}

export default MainWrapper