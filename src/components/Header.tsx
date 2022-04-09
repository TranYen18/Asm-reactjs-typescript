import Nav from '../../src/components/Nav';
import Search from '../../src/components/Search';

import React from 'react'
import Banner from './Banner';

type Props = {}

const Header = (props: Props) => {
    return (
        <header>
            {/* <div className="logo text-center w-3/6">
                <img src='http://u611166.webmienphi.vn/userfiles/img/611166/logo.png' width="10%" alt="" className="" />
            </div> */}
            <div className="text-center" style={{ backgroundColor: '#C1E3CE' }}>
                <p>
                Chuỗi Siêu Thị Nước Hoa Mỹ Phẩm Uy Tín Từ 2004
                </p>
               
                

            </div>
            <div className="container my-8 w-3/6 flex">
                <div className='row'>
                    <div className="col-lg-6 col-md-12 mb-4">
                        <img src="	http://u611338.webmienphi.vn/userfiles/img/611338/logo01e1501054837624.300.png" width="40%" alt="" className="" />
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4">
                        <Search />
                    </div>

                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <Nav />
                            
                        </div>
                    </div>
                </nav>
                <Banner />
            </div>
        </header>
    )
}

export default Header