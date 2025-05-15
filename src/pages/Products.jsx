import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Products() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>Homepage</NavLink>
                        </li>
                        <li>
                            <NavLink to='/aboutus'>Chi siamo</NavLink>
                        </li>
                        <li>
                            <NavLink to='/products'>Prodotti</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <h1>Prodotti</h1>
            </div>
        </>
    )
}

export default Products
