import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ProductType } from '../type/Product';
import { signin, signup } from '../api/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


type FormInputs = {
    email: string,
    password: string | number
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSumbit: SubmitHandler<FormInputs> = async (user) => {
        const { data } = await signin(user);
        console.log(data)
        if (data) {
            toast.success("Bạn đã đăng nhập thành công, chờ 3s");
            setTimeout(() => {
                navigate('/')
                localStorage.setItem("user", JSON.stringify(data))
            }, 3000)
        }
    }
    return (
        <div className='container my-5'  >

            <form onSubmit={handleSubmit(onSumbit)} className='w-full sm:w-[250px] p-4 mx-auto flex flex-col bg-gray-200 rounded-md'>
                <div className="md-3 ">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control px-3 py-2.5 mb-3 border-2 border-gray-800 rounded-md"  {...register('email')} />
                </div>
                <div className="md-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control px-3 py-2.5 mb-3 border-2 border-gray-800 rounded-md"  {...register('password')} />
                </div>
                <button className="btn btn-primary px-2 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white mt-3">Đăng nhập</button>
            </form>

           
         
 
            <ToastContainer />
        </div>

    )
}

export default Signin