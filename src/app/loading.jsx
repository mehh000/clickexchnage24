'use client'

import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <Image src={'/loading.gif'} height={100} width={100} alt='loading...' />
    </div>
  )
}

export default Loading