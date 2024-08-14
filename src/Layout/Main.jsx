import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import DashBord from './DashBoard/DashBord';


const Main = () => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
            <DashBord></DashBord>
        </div>
    );
};

export default Main;