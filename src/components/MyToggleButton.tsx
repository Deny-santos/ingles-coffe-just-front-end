import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import useMenuBars from '@/hooks/useMenuBars';

type Props = {
    isLight?: boolean
}

const MyToggleButton = ({isLight}: Props) => {

    const {handleShowMenu} = useMenuBars()

    return (
        <div className={`relative z-40`} onClick={handleShowMenu}>
            <ToggleButton  value="justify" key="justify" >
                <FormatAlignJustifyIcon sx={{ fontSize: "40px" }} className={`
                    ${isLight? "text-dark-150": "text-light-50"}
                `}/>
            </ToggleButton>
        </div>
    )
}

export default MyToggleButton