import React from 'react'
import { ProductType } from '../type/Product';
import { Link } from 'react-router-dom'


type ProductManagerProps = {
    products: ProductType[];
    onRemove: (id: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
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