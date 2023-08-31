import React from 'react'

type Props = {
    children: React.ReactNode;
}

const TextTitle = ({ children }: Props) => {
    return (
        <div key={1} className='py-4'>
            {children}
        </div>
    )
}

export default TextTitle