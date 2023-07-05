import { SvgIconProps } from '@mui/material';
import React from 'react'

type Props = {
    value: string | React.ReactElement<SvgIconProps>;
    href?: string;
}

function MainOptions({ href = "#", value,}: Props) {

    const style = "bg-blue-100 text-light-50 py-[5px] px-[10px] text-[14px] rounded-md"

    return (
        <>
            <a className={`${style}`} href={href}>
                {value}
            </a>
        </>
    )
}

export default MainOptions