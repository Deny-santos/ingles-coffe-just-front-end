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
import Sentences from './Sentences'
import H2 from './H2'
import Separator from './Separator'
import Acronimos from './Acronimos'
import Eye from './Eye'


function MainWrapper() {

    const { darkMode } = useTheme()
    const { setShowBars, showBars } = useMenuBars()

    return (
        <main
            onClick={() => showBars ? setShowBars(false) : ""}
            className={`
            min-h-screen max-w-[100vw] pt-20 overflow-x-hidden flex flex-col gap-5
            ${darkMode ? "bg-dark-100" : "bg-light-200"}
            `}
            style={{ scrollBehavior: "smooth" }}
        >
            <MainHeader />
            <MainOptionsContainer />
            <UserName />
            <CardSesion />
            <Eye />
            <H2 text='palavras e expressões'/>
            <Words />
            <Separator/>
            <H2 text='Acrônimos'/>
            <Acronimos/>
            <Separator/>
            <H2 text='Textos'/>
            <Sentences />
            <MainFooter />
        </main>
    )
}

export default MainWrapper