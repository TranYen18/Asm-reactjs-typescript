import Nav from '../../src/components/Nav';
import Search from '../../src/components/Search';

import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            <div className="logo text-center w-3/6">
                <img src='http://u611166.webmienphi.vn/userfiles/img/611166/logo.png' width="10%" alt="" className="" />
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Nav />
                        <Search />
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header