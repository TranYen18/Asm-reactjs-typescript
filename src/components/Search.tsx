import React from 'react'

type Props = {}

const Search = (props: Props) => {
    return (
        <form className="d-flex " >
            <input className="form-control me-2" style={{width:"250px"}} type="search" placeholder="Nhập từ khóa tìm kiếm . . ." aria-label="Search" />
            <button className="btn btn-outline-success ">Search</button>
            
        </form>
    )
}

export default Search