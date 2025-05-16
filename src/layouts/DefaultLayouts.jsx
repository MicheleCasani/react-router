import React from 'react'
import ManiNavbar from '../components/ManiNavbar'
import { Outlet } from 'react-router-dom'

function DefaultLayouts() {
    return (
        <>
            <div className="container">
                <header>
                    <ManiNavbar />
                </header>
                <main>

                    <div className="row">
                        <div className="col-12">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div >
        </>
    )
}

export default DefaultLayouts
