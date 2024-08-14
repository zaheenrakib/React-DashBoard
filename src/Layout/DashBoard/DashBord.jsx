import React from 'react';
import Navbar from '../NavBar/Navbar';
import Stats from '../Stats/Stats';
import ReChart from '../ReChart/ReChart';
import Table from '../Table/Table';

const DashBord = () => {
    return (
        <>
            <div className='w-full p-2'>
                <Navbar></Navbar>
                <div className='flex gap-10'>
                    <div className='flex flex-col gap-5'>
                        <div className="card bg-gradient-to-r from-cyan-400 to-blue-700 text-white">
                            <div className="">
                                <div className='card-body'>
                                    <h2 className="card-title text-3xl">Faundamentals Of  User Experience (UX) Design</h2>
                                    <p> 4 Assignments And 20 Videos </p>
                                </div>
                            </div>
                            <div className="flex justify-around items-center mb-5">
                                <div>
                                    <button className="btn rounded-full">Countinue Course</button>
                                </div>
                                <div className="radial-progress" style={{ "--value": 85 }} role="progressbar">
                                    85%
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="">
                                <div className='card-body'>
                                    <h2 className="card-title text-3xl">Faundamentals Of  User Experience (UX) Design</h2>
                                    <p> 4 Assignments And 20 Videos </p>
                                </div>
                            </div>
                            <div className="flex justify-around items-center mb-5">
                                <div>
                                    <button className="btn rounded-full  bg-gradient-to-r from-cyan-400 to-blue-700 text-white">Countinue Course</button>
                                </div>
                                <div className="radial-progress" style={{ "--value": 85 }} role="progressbar">
                                    85%
                                </div>
                            </div>
                        </div>
                        <div className="card ">
                            <div className="">
                                <div className='card-body'>
                                    <h2 className="card-title text-3xl">Faundamentals Of  User Experience (UX) Design</h2>
                                    <p> 4 Assignments And 20 Videos </p>
                                </div>
                            </div>
                            <div className="flex justify-around items-center mb-5">
                                <div>
                                    <button className="btn rounded-full bg-gradient-to-r from-cyan-400 to-blue-700 text-white">Countinue Course</button>
                                </div>
                                <div className="radial-progress" style={{ "--value": 85 }} role="progressbar">
                                    85%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Stats></Stats>
                        <ReChart></ReChart>
                        <Table></Table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBord;