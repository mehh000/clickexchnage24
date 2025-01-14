import Footer from '@/components/footer'
import Navber from '@/components/Navber'
import React from 'react'

function UserLayout({
    children
}) {
    return (
        <div>
            <Navber />
            {children}
            <Footer />
        </div>
    )
}

export default UserLayout