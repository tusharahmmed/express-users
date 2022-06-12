import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <form className='lg:w-7/12 md:w-2/4 sm:w-3/5 m-auto login-form'>
            <div className='flex justify-between items-center mb-6 input-wraper'>
                <label className='' htmlFor="emailInput">Email</label>
                <input className='form-input' type="email" name="" id="emailInput" />
            </div>
            <div className='flex justify-between items-center mb-6 input-wraper'>
                <label className='' htmlFor="passwordInput">Password</label>
                <input className='form-input' type="password" name="" id="passwordInput" />
            </div>
            {/* <div>

            </div> */}
            <div className='mb-6 form-button sign-in'>
                <button>SIGN IN</button>
            </div>


            <span className='mb-6 form-devider'>
                OR
            </span>


            <div className='mb-6 form-button google-btn'>
                <button className='bg-red-700 hover:bg-red-800'>LOG IN WITH GOOGLE</button>
            </div>
            <div className='mb-6 form-button'>
                <button className='bg-blue-800 hover:bg-blue-900'>LOG IN WITH FACEBOOK</button>
            </div>
        </form>
    );
};

export default Login;