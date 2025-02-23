import { IconLoader } from '@/public/icons/icons'
import Image from 'next/image'
import { LoaderProps } from '@/lib/types'
import React from 'react'

const Loader = ({ width, height }: LoaderProps) => {
    return (
        <div className='flex h-full w-full items-center justify-center'><Image src={IconLoader} alt="loader" width={width} height={height} className='animate-spin' /></div>
    )
}

export default Loader