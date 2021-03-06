import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { signup } from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type FormInputs = {
    name: string,
    email: string,
    password: string
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = data => {
        signup(data);
        navigate("/signin");


        //const onSumbit: SubmitHandler<FormInputs> = async (user) => {
        //    const { data } = await signup(user);
        //    if (data) {
        //        toast.success("Bạn đã đăng ký thành công, chờ 3s");
        //        setTimeout(() => {
        //            navigate('/signin')
        //        }, 3000)
        //    }
    }
    return (
        <div className="container my-5">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" {...register('name')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"  {...register('email')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control"  {...register('password')} />
                </div>
                <button className="btn btn-primary">Đăng ký</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup