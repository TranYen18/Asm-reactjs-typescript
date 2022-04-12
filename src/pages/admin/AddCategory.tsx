import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TypeCategory } from '../../type/category';
import { isAuthenticate } from '../../utils/localStorage'

type AddCategoryProps = {
    onAddCate: (category: TypeInput, user: any, token: any) => void
}
type TypeInput = {
    name:string
}

const AddCategory = (props: AddCategoryProps) => {
    
    const { register, handleSubmit, formState : {errors},reset} = useForm<TypeInput>();
    const navigate = useNavigate();
    const {user, token} = isAuthenticate();
    const onSubmit: SubmitHandler<TypeInput> = {data:any} =>{
        // console.log(data);
        props.onAddCate(data,user,token);
        reset(data);
        navigate('admin/category');
    }
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="container my-8">
        <div className="mb-3 ">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" {...register('name')} />
        </div>
        <button className="btn btn-primary">Thêm danh mục</button>
    </form>
</div>
  )
}

export default AddCategory