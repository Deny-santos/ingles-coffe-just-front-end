'use client'


import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import useMenuBars from '@/hooks/useMenuBars';

type Props = {
}

const MyToggleButton = (props: Props) => {


    const {handleShowMenu} = useMenuBars()

    return (
        <div className={`relative z-40`} onClick={handleShowMenu}>
            <ToggleButton  value="justify" key="justify" >
                <FormatAlignJustifyIcon sx={{ color: "white", fontSize: "50px" }} />
            </ToggleButton>
        </div>
    )
}

export default MyToggleButton