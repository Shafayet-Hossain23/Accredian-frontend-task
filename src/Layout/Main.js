import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../SharedPages/Header';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Main;