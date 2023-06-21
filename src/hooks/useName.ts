'use client'

import React, { useState, useContext } from 'react'
import { UserContext } from '@/context/user'


const useName = () => {

    
    const userContext = useContext(UserContext)

    if (!userContext) {
        throw new Error('Error: Missing context value');
    }
    const { email, name, setEmail, setName } = userContext
    localStorage.setItem("name", name)
    const userName = localStorage.getItem("name")

    const handleSubmit = () => {
        console.log(useName)
    }

    return {
        name, email, setName, setEmail, handleSubmit, userName
    }
}

export default useName