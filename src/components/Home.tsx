'use client'

import React from 'react'
import Image from "next/image"
import { homeCofe } from "../../public"
import Header from "@/components/Header"
import { TextField } from "@mui/material";
import Logo from "@/components/Logo";
import Bars from "@/components/Bars";
import useMenuBars from '@/hooks/useMenuBars'

type Props = {}

function Home({ }: Props) {

    const {setShowBars, showBars} = useMenuBars()

    return (
        <div className="page" onClick={() => showBars ? setShowBars(false): ""}>
            <div className="img max-w-[100%] w-screen absolute top-0 h-screen z-10 overflow-x-hidden">
                <Header />
                <Bars />

                <div className="flex absolute top-[250px] md:top-[200px] h-[60%] w-[90%] gap-5 z-10">
                    <div className="absolute -top-[110px] md:hidden page__logo-container ">
                        <Logo />
                    </div>
                    <div className="ml-6 flex-1 hidden sm:flex">
                        <Image src={homeCofe} alt="svg da home" className="max-w-[100%] h-[100%] " />
                    </div>

                    <div className="flex flex-1 flex-col items-center justify-center gap-5 max-w-[90%] pb-10 w-[100%]  mx-auto ml-[14%]">
                        <h1 className="text-white md:text-[30px] text-[25px] font-semibold" >Aprenda Ingles De Forma Facil</h1>
                        <form className={`
                            flex flex-1 flex-col items-center justify-center  gap-6 
                            shadow-xl bg-[#ffffffba] rounded-lg md:w-[80%] max-w-[100%] w-[100%] xl:w-[50%]
                        `}>
                            <div>
                                <TextField id="filled-basic" label="name" variant="outlined" className="max-w-[95%]" />
                            </div>
                            <div>
                                <TextField id="filled-basic" label="Email" variant="outlined" className="max-w-[95%]" />
                            </div>

                            <a
                                href="/main"
                                className='py-3 text-[20px] px-14 bg-blue-500 text-white h-max max-w-[100%] font-semibold rounded-md'>
                                Começar
                            </a>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home