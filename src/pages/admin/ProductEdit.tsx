import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ProductType } from '../../type/Product';
import { read, update } from '../../api/product';
import React, { useEffect, useState } from 'react';
import { TypeCategory } from "../../type/category";
import { isAuthenticate } from "../../utils/localStorage";
import { list } from "../../api/category";


type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}

type FormInputs = {
    name: string,
    price: number,
    category: string,
    desc: string
}

const ProductEdit = (props: ProductEditProps) => {
    const [cate, setCate] = useState<TypeCategory[]> ([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const { id }:any = useParams();
    const {token, user} = isAuthenticate()
    const navigate = useNavigate();


    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProduct();
    }, []);
    useEffect(() => {
        const getCategory = async () => {
            const {data} = await list();
            setCate(data)
        }
    })
    const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
        // console.log(data);
        props.onUpdate(data, user,token);
        navigate("/admin/product");
    }
    return (
        <div>
            <h2>Sửa sản phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="container my-8">
                <div className="mb-3 ">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" {...register('name')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control"  {...register('price')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select className="form-select" {...register("category")}>
                        {cate.map((item, index) =>

                            <option value={item._id} key={index}>{item.name}</option>
                        )}
                    </select>
                    <input type="hidden" {...register("category")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Desc</label>
                    <input type="text" className="form-control"  {...register('desc')} />
                </div>
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default ProductEdit