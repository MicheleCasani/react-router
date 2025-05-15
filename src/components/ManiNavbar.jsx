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
                <ul className='list-unstyled d-flex justify-content-center my-5'>
                    {links.map((link, index) => {
                        return (
                            <li key={index}
                                className='mx-3'>
                                <NavLink to={link.path}
                                    className='text-decoration'>
                                    {link.label}
                                </NavLink>
                            </li>
                        )
                    })}

                    {/* metodo esteso */}
                    {/* <li>
                        <NavLink to='/'>Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts'>Contacts</NavLink>
                    </li> */}

                </ul>
            </nav>
        </header>
    )
}

export default ManiNavbar
