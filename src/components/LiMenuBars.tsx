import useMenuBars from '@/hooks/useMenuBars'
import React from 'react'

type Props = {
    children: React.ReactNode,
    href: string,
}

const LiMenuBars = (props: Props) => {

    const {handleShowMenu} = useMenuBars()

    const { children, href } = props
    return (
        <li className='text-light-50'>
            <a 
                href={href} 
                onClick={handleShowMenu} 
                className='flex gap-4 text-3xl hover:bg-blue-100 py-4 rounded-md duration-300 px-5 font-semibold text-light-50'>
                {children}
            </a>
        </li>
    )
}

export default LiMenuBars