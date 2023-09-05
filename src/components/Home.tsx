'use client'

import React from 'react'
import Image from "next/image"
import { homeCofe } from "../../public"
import Header from "@/components/Header"
import Logo from "@/components/Logo";
import Bars from "@/components/Bars";
import useMenuBars from '@/hooks/useMenuBars'
import Form from './Form'


function Home() {

    const {setShowBars, showBars} = useMenuBars()

    return (
        <div className="page pb-6" onClick={() => showBars ? setShowBars(false): ""}>
            <div className="img max-w-[100%] w-screen absolute top-0 h-screen z-10 overflow-x-hidden">
                <Header />


                <div className="flex absolute top-[250px] md:top-[200px] h-[60%] w-[90%] gap-5 z-10">
                    <div className="absolute -top-[110px] md:hidden page__logo-container ">
                        <Logo />
                    </div>
                    <div className="ml-6 flex-1 hidden sm:flex">
                        <Image src={homeCofe} alt="svg da home" className="max-w-[100%] h-[100%] " />
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-center gap-5 max-w-[90%] pb-10 w-[100%]  mx-auto ml-[14%]">
                        <h1 className="text-light-50 md:text-[30px] text-[25px] font-semibold" >Do you want to learn english?</h1>
                        <Form/>
                        <span className='text-light-100 font-semibold'>- New words and expresions every week -</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home