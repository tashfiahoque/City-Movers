import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import RideRent from '../RideRent/RideRent';
import searchResults from './fakeData2.js';

const Destination = () => {


    const { id } = useParams();

    const result = searchResults.filter((item) => item.id === parseInt(id));

    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    {result.map(result => <RideRent result={result} />)}
                </div>
            </div>

        </div>
    );
};

export default Destination;