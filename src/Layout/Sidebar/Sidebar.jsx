import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FcSupport } from 'react-icons/fc';
import { GiCartwheel } from 'react-icons/gi';
import { IoSettings, IoSunnyOutline } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
import DashBord from '../DashBoard/DashBord';

const Sidebar = () => {
    return (
        <div className='flex'>
            <div className='w-[250px] h-screen fixed bg-slate-200'>
                <div className='w-full flex justify-center items-center'>
                    <IoSunnyOutline className='text-4xl mt-4 text-blue-300' />
                    <h1 className='text-2xl mt-4 font-extrabold'>
                        <span className='text-blue-300 font-semibold'>On</span>Course
                    </h1>
                </div>

                <ul>
                    <div className='flex flex-col mt-8 p-2 text-black'>
                        <div className='space-y-8'>
                            <li className='flex justify-start items-center text-blue-400 gap-2 text-xl'>
                                <MdDashboard />
                                <Link to="/" className='text-blue-400'>Overview</Link>
                            </li>
                            <li className='flex justify-start items-center gap-2 text-xl'>
                                <FaGraduationCap />
                                <Link to="add-product" className=''>Complete</Link>
                            </li>
                            <li className='flex justify-start items-center gap-2 text-xl'>
                                <GiCartwheel />
                                <Link to="product-list" className=''>Financial Aid</Link>
                            </li>
                        </div>
                        <div className='space-y-2 absolute bottom-2'>
                            <li className='flex justify-start items-center gap-2 text-xl'>
                                <FcSupport />
                                <Link to="product-list" className=''>Support</Link>
                            </li>
                            <li className='flex justify-start items-center gap-2 text-xl'>
                                <IoSettings />
                                <Link to="product-list" className=''>Setting</Link>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
            <div className='flex-1 ml-[240px] p-4'>
                <DashBord></DashBord>
            </div>
        </div>

    );
};

export default Sidebar;