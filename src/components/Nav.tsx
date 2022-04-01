import React from 'react'

type Props = {}

const Nav = (props: Props) => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-pills hover:bg-white" >
            <li className="nav-item">
                <a className="nav-link active"  aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item ">
                <a className="nav-link"  href="#">NHÃN HIỆU</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">NƯỚC HOA</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">SON MÔI</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">MAKE-UP</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">SKINCARE</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">BLOG</a>
            </li>
            
        </ul>
    )
}

export default Nav