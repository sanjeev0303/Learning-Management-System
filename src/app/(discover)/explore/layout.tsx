import Navbar from '@/app/group/_components/navbar'
import React from 'react'

type DiscoverLayoutProps = {
    children: React.ReactNode
}

const DiscoverLayout = ({ children }: DiscoverLayoutProps) => {
  return (
    <div className='flex flex-col min-h-screen bg-balck pb-10'>
        {children}
    </div>
  )
}

export default DiscoverLayout
