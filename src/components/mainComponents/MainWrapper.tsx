'use client'

import React, { useEffect } from 'react'
import MainHeader from "@/components/mainComponents/MainHeader"
import Words from "@/components/mainComponents/Words"
import UserName from "@/components/mainComponents/UserName"
import CardSesion from "@/components/mainComponents/CardSesion"
import useTheme from "@/hooks/useTheme"
import MainFooter from './MainFooter'
import useName from '@/hooks/useName'
import useMenuBars from '@/hooks/useMenuBars'
import MainOptionsContainer from './MainOptionsContainer'

type Props = {}

function MainWrapper({ }: Props) {

    const { darkMode } = useTheme()
    const { setShowBars, showBars } = useMenuBars()

    const { name } = useName()

    useEffect(() => {
        console.log(name)
    })

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