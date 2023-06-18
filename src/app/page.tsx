'use client'

import Image from "next/image"
import { bgMain, homeCofe } from "../../public"
import Header from "@/components/Header"
import { Button } from '@mui/joy';
import { TextField } from "@mui/material";
import HeaderOPtions from "@/components/Logo";


export default function Home() {


  return (
    <div className="page ">
      <div className="max-w-[100vw]  absolute top-0 h-screen bg-black z-10">
      <Header />
    
      <div className="flex absolute top-[250px] md:top-[200px] left-6 h-[60%] w-[90%] gap-5 z-10">
        <div className="absolute -top-[110px] md:hidden page__logo-container">
          <HeaderOPtions/>
        </div>
        <div className=" flex-1 hidden sm:flex">
          <Image src={homeCofe} alt="svg da home" className="max-w-[100%] h-[100%] " />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-5 max-w-[90%] pb-10 w-[100%]  p-0">
          <h1 className="text-white md:text-[30px] text-[25px] font-semibold" >Aprenda Ingles De Forma Facil</h1>
          <form className={`
            flex flex-1 flex-col items-center justify-center  gap-6 
            shadow-xl bg-[#ffffffba] rounded-lg md:w-[50%] max-w-[100%] w-[100%]
          `}>
            <div>
              <TextField id="filled-basic" label="name" variant="outlined" />
            </div>
            <div>
              <TextField id="filled-basic" label="Email" variant="outlined" />
            </div>
            
            <Button variant="solid" className='text-[20px] px-14 bg-blue-500 text-white h-max max-w-[100%] font-semibold rounded-md'>Começar</Button>
          </form>
        </div>
      </div>


        <Image
          src={bgMain}
          alt='imagen principal'
          className="img w-[100vw] min-w-[100vw] min-h-[100vh] h-[100-vh] bg-cover z-0" />
      </div>
    </div>

    
  )
}
