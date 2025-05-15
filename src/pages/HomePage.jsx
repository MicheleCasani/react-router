import React from 'react'
import ManiNavbar from '../components/ManiNavbar'

function HomePage() {
    return (
        <>
            <div className='container'>
                <ManiNavbar />
                <div className="row">
                    <div className="col-12 justify-content-center text-center my-5">
                        <h1>Homepage</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
