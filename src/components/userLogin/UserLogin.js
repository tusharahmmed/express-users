import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Login from './Login/Login';
import Register from './Register/Register';
import './UserLogin.css';


const UserLogin = () => {
    return (
        <div className='p-4 lg:py-32 lg:px-96 tab-warper'>
            <Tabs focusTabOnClick={false}>
                <TabList>
                    <Tab className='text-xl font-medium'>Sign in</Tab>
                    <Tab className='text-xl font-medium'>Register</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='my-12 text-4xl form-title text-center'>Sign in</h2>

                    <div className='form-wraper'>
                        <Login />
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='my-12 text-4xl form-title text-center'>Register</h2>

                    <div className='form-wraper'>
                        <Register />
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default UserLogin;