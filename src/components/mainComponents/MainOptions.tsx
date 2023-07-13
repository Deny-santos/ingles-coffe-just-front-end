import { SvgIconProps } from '@mui/material';
import React from 'react'

type Props = {
    value: string | React.ReactElement<SvgIconProps>;
    href?: string;
}

function MainOptions({ href = "#", value,}: Props) {

    return (
        <>
            <a className={`bg-blue-100 text-light-50 py-[5px] px-[10px] text-[14px] rounded-md border-[0.5px]`} href={href}>
                {value}
            </a>
        </>
    )
}

export default MainOptions