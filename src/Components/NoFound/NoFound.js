import React from 'react';
import Header from '../Header/Header';

const NoFound = () => {
    return (
        <>
            <Header />
            <div className='text-danger'>
                Sorry, Page not found.
        </div>
        </>
    );
};

export default NoFound;