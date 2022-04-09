import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'
type Props = {}

const Nav = (props: Props) => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0  "  id='menu'>
            <li className="nav-item">
                <NavLink className={`${styles['nav-link']} nav-link`}  aria-current="page" to="/">HOME</NavLink>
            </li>
            <li className="nav-item " id='menu'>
                <NavLink className={`${styles['nav-link']} nav-link`}  to="#">NHÃN HIỆU</NavLink>
            </li>
            <li className="nav-item"  id='menu'>
                <NavLink className={`${styles['nav-link']} nav-link`} to="#">NƯỚC HOA</NavLink>
            </li>
            <li className="nav-item"  id='menu'>
                <NavLink className={`${styles['nav-link']} nav-link`} to="#">SON MÔI</NavLink>
            </li>
            <li className="nav-item"  id='menu'>
                <NavLink className={`${styles['nav-link']} nav-link`} to="#">MAKE-UP</NavLink>
            </li>
            <li className="nav-item"  id='menu'>
                <NavLink className={`${styles['nav-link']} nav-link`} to="#">SKINCARE</NavLink>
            </li>
            <li className="nav-item"  id='menu'>
                <NavLink className={`${styles['nav-link']} nav-link`} to="#">BLOG</NavLink>
            </li>
            
        </ul>
    )
}

export default Nav