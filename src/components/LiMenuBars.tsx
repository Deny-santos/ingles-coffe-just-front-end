import useMenuBars from '@/hooks/useMenuBars'
import React from 'react'


type Props = {
    children: React.ReactNode,
    href: "main",
}

const LiMenuBars = (props: Props) => {

    const {handleShowMenu} = useMenuBars()

    const { children, href } = props
    return (
        <li className='text-white'>
            <a 
                href={href} 
                onClick={handleShowMenu} 
                className='flex gap-4 text-3xl hover:bg-blue-500 py-4 rounded-md duration-300 px-5 font-semibold'>
                {children}
            </a>
        </li>
    )
}

export default LiMenuBars