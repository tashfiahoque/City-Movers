import React from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import RideRent from '../RideRent/RideRent';
import searchResults from './fakeData2.js';

const Destination = () => {

    const { id } = useParams();
    const result = searchResults.filter((item) => item.id === parseInt(id));

    return (
        <>
            <Header />
            <div className="container">
                <div className="col-12">
                    <hr />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {result.map(res => <RideRent res={res} key={res.id} />)}
                </div>
            </div>
        </>
    );
};

export default Destination;