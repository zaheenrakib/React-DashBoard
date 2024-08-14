import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;