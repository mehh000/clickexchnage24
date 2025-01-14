import Image from 'next/image'
import React from 'react'

function PageNotFound() {
    return (
        <div className="w-full h-full flex items-center justify-center ">
            <Image src={'/404.png'} height={500} alt='page not found' width={500} />
        </div>
    )
}

export default PageNotFound