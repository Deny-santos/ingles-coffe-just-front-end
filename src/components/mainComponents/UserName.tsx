'use client'

import useName from '@/hooks/useName'
import React from 'react'

type Props = {}

const UserName = (props: Props) => {

    const { name, userName } = useName()


    return (
        <div className='flex max-w-screen items-center justify-end p-5 pr-10'>
            <span className='text-white'>
                Olá {userName || ""}, seja bem vindo 
            </span>
        </div>
    )
}

export default UserName