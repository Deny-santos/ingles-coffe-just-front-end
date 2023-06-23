import useTheme from '@/hooks/useTheme'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Icons from './Icons';
import Logo from '../Logo';

type Props = {}

function MainFooter({ }: Props) {

    const { darkMode } = useTheme()

    return (
        <footer id="footer" className={`
            min-h-[30vh]  mt-14 flex items-center justify-around p-5 text-light-100 gap-3 flex-wrap
            ${darkMode ? "bg-blue-50": "bg-dark-150 "}
        `}>
            <div>
                <h3 className={`
                    text-[30px] font-semibold py-3 px-5 rounded-lg
                    text-dark-100 bg-gradient-to-r from-blue-100 to-light-150 
                `}>Denisson Santos</h3>
            </div>

            <div className='flex gap-5  '>
                <Icons Icon={GitHubIcon} />
                <Icons Icon={WhatsAppIcon} />
                <Icons Icon={InstagramIcon} />
            </div>
            
            <div className={`
                ${darkMode ? "text-dark-150": "text-light-100"}
            `} >
                <Logo />
            </div>
        </footer>
    )
}

export default MainFooter
