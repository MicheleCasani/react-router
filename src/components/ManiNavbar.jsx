import React from 'react'
import { NavLink } from 'react-router-dom'

function ManiNavbar() {

    const links = [
        {
            path: '/',
            label: 'Homepage',
        },
        {
            path: '/aboutus',
            label: 'Chi siamo',
        },
        {
            path: '/products',
            label: 'Prodotti',
        }
    ];


    return (
        <header>
            <nav>
                <ul className='list-unstyled d-flex justify-content-center'>
                    {links.map((link, index) => {
                        return (
                            <li key={index}
                                className='mx-3'>
                                <NavLink to={link.path}>
                                    {link.label}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default ManiNavbar
