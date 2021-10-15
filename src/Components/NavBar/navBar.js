import React from 'react';
import { Link } from 'react-router-dom';

import './navBar.css';

function NavBar () {
    return (
    <>
        <nav className = "navBar">
            <div className = "navbar_container">
                <ul className = "nav_menu">
                    <li className = "nav_item">
                        <Link to = "/" className = "nav_link"> Home </Link>
                    </li>
                    <li className = "nav_item">
                        <Link to = "/projects" className = "nav_link"> Projects </Link>
                    </li>
                    <li className = "nav_item">
                        <Link to = "/contact" className = "nav_link"> Contact </Link>
                    </li>
                </ul>
            </div>

        </nav>
    </>
    )
}

export default NavBar;
