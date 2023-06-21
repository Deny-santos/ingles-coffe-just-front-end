'use client'

import React from 'react'
import MainHeader from "@/components/mainComponents/MainHeader"
import Words from "@/components/mainComponents/Words"
import UserName from "@/components/mainComponents/UserName"
import CardSesion from "@/components/mainComponents/CardSesion"
import useTheme from "@/hooks/useTheme"

type Props = {}

function MainWrapper({ }: Props) {

    const {darkMode, setDarkMode} = useTheme()

    return (
        <main className={`
            min-h-screen max-w-[100vw] scroll-smooth
            ${darkMode ? `
                dark:bg-dark-100
            ` : `
                bg-light-200
            `}
        `}>
            <MainHeader />
            <UserName />
            <CardSesion />
            <Words />
        </main>
    )
}

export default MainWrapper