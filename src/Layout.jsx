import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router'

const Layout = () => { // this is the base out out layout the only content inside the Outlet will change, everything else remains same
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            {/* Header or Footer will always be there, content inside these 2 components will change */}
        </>
    )
}

export default Layout