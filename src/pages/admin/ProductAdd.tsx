import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { list } from "../../api/category";
import {TypeCategory} from "../../type/category";
import { isAuthenticate } from "../../utils/localStorage";

type Inputs = { // kiểu dữ liệu của từng input
    name: string,
    price: number,
    desc: string,
    category:string
};

type ProductAddProps = {
    onAdd: (product: Inputs, user:any, token:any) => void
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
    //sử dụng hook useNavigate để chuyển sang
    const navigate = useNavigate();
    const [cate, setCate] = useState<TypeCategory[]> ([]);
    const {token, user} = isAuthenticate()
    useEffect(() =>{
        const getCategory = async () =>{
        const {data} = await list()
        setCate (data)
    }
    getCategory();
    },[]);
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        // console.log(dataInput);  
        props.onAdd(dataInput,token,user);
        reset(dataInput, token);
        //chuyển trang 
        navigate("/admin/product");

    }
    return (
        <div>
            <h2>Thêm sản phẩm</h2>
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
                    <label className="form-label">Category </label>
                    <select className="form-select" {...register('category')} aria-label="Default select example">
                        {cate.map(item =>
                            <option value={item._id}>{item.name}</option>
                        )}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Mô Tả</label>
                    <textarea className="form-control" rows={3} defaultValue={""} {...register('desc')} />
                </div>

                
                <button className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>
    )
}

export default ProductAdd