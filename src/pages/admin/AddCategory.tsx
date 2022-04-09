import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type AddCategoryProps = {
    onAddCate: (category: TypeInput) => void
}
type TypeInput = {
    name:string
}

const AddCategory = (props: AddCategoryProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState : {errors}} = useForm<TypeInput>();
    const onSubmit: SubmitHandler<TypeInput> = data =>{
        console.log(data);
        props.onAddCate(data);
        navigate('admin/categories');
    }
  return (
    <div><div><form onSubmit={handleSubmit(onSubmit)}>
    <label className='item-form form-label text-uppercase fw-bold' htmlFor="">Name category</label>
    <input type="text" autoComplete='off' className='form-control' {...register('name', { required: true })} />
    <button className='item-form btn btn-primary my-4 text-uppercase'>Add category</button>
  </form></div></div>
  )
}

export default AddCategory