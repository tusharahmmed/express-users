import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <form className='lg:w-8/12 md:w-2/4 sm:w-3/5 m-auto login-form'>
            <div className='flex justify-between items-center mb-6 input-wraper'>
                <label className='' htmlFor="accountType">Account Type</label>
                <select className='form-input' name="account-type" id="">
                    <option value="volvo">Individual</option>
                    <option value="saab">Corporate/Business</option>
                    <option value="mercedes">Reseller/Service Agent</option>
                </select>
            </div>
            <div className='flex justify-between items-center mb-6 input-wraper'>
                <label className='' htmlFor="mobileInput">Mobile No</label>
                <input className='form-input' type="text" name="" id="mobileInput" />
            </div>
            <div className='flex justify-between items-center mb-6 input-wraper'>
                <label className='' htmlFor="emailInput">Email</label>
                <input className='form-input' type="email" name="" id="emailInput" />
            </div>
            <div className='flex justify-between items-center mb-6 input-wraper'>
                <label className='' htmlFor="passwordInput">Password</label>
                <input className='form-input' type="password" name="" id="passwordInput" />
            </div>
            <div className='flex justify-between items-center mb-6 input-wraper'>
                <label className='' htmlFor="passwordInput">Re-Password</label>
                <input className='form-input' type="password" name="" id="passwordInput" />
            </div>
            <div className='mb-6 form-button btn-register'>
                <button>REGISTER</button>
            </div>


            <span className='mb-6 form-register-devider'>
                OR
            </span>


            <div className='mb-6 form-button google-btn'>
                <button className='bg-red-700 hover:bg-red-800'>SIGN UP WITH GOOGLE</button>
            </div>
            <div className='mb-6 form-button'>
                <button className='bg-blue-800 hover:bg-blue-900'>SIGN UP WITH FACEBOOK</button>
            </div>
        </form>
    );
};

export default Register;