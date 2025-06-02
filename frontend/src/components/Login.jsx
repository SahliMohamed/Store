import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa';
import { useForm } from "react-hook-form"

const Login = () => {
    const [message, setMessage] = React.useState('');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    const handleGoogleSignIn = () => {

    }
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center '>
        <div className='w-full max-w-sm mx-auto bg-white p-8 rounded shadow-md pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' 
                    htmlFor="email">Email</label>
                    <input 
                    {...register("email", { required: true })}
                    type="email" 
                    name='email' 
                    id="email" 
                    placeholder='Enter your email'
                    className='shadow appearance-none border rounder w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' 
                    htmlFor="password">Password</label>
                    <input 
                    {...register("password", { required: true })}
                    type="password" 
                    name='password' 
                    id="password" 
                    placeholder='Enter your password'
                    className='shadow appearance-none border rounder w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
                </div>
                {
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-8 rounded focus:outline-none' type='submit'>
                        Login
                    </button>
                    <p className='align-baseline font-medium mt-4 text-sm'>
                        Haven't an account? Please <Link to='/register' className='text-blue-500 hover:text-blue-700'>Register</Link>
                    </p>

                    {/* google signin  */}
                    <div className='mt-4'>
                        <button 
                        onClick={handleGoogleSignIn}
                        className='w-full flex flex-wrap items-center justify-center bg-secondary  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                            <FaGoogle className='mr-2'/>
                            Sign in with Google
                        </button>
                    </div>
                    <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login