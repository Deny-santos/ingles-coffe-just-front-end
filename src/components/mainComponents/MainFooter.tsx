import useTheme from '@/hooks/useTheme'
import React from 'react'

type Props = {}

function MainFooter({ }: Props) {

    const { darkMode } = useTheme()

    return (
        <footer className='h-[30vh] bg-blue-100 mt-14 flex'>
            <div>
                <h3>Denisson Santos</h3>
            </div>
            <div></div>
            <div></div>
        </footer>
    )
}

export default MainFooter