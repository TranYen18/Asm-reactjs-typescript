import React from 'react'
import { ProductType } from '../../type/Product';
import { Link } from 'react-router-dom'
import {TypeCategory} from '../../type/category'
import { isAuthenticate } from '../../utils/localStorage';


type ProductManagerProps = {
    products: ProductType[];
    categories: TypeCategory[];
    onRemove: (id: number , token: any, user :any) => void
}

const ProductManager = (props: ProductManagerProps) => {
    const {user, token} = isAuthenticate()
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <div className="">
                <Link to={`/admin/product/add`} className="btn btn-primary">Thêm mới</Link>

            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Mô Tả</th>
                        <th>Danh Mục</th>
                        <th>Thao tác</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.desc}</td>
                            <td>{item.category}</td>
                            <td>
                                <Link className='btn btn-outline-success' to={`/admin/product/${item._id}/edit` }>Editor</Link>
                                <br />
                                <br />
                                <button className='btn btn-outline-danger' onClick={() => props.onRemove(item._id)}>Remove</button>
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManager