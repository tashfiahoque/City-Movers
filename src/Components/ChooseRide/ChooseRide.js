import React, { useEffect, useState } from 'react';
import RideOption from '../RideOption/RideOption.js';
import rideOption from './fakeData.js';
import './ChooseRide.css';


const ChooseRide = () => {

    const [rideOptions, setRideOptions] = useState([]);
    useEffect(() => {
        setRideOptions(rideOption);
    }, [])

    return (
        <div className="container options-card">
            <div className="row">
                {
                    rideOptions.map((rideOption) => <RideOption rideOption={rideOption} key={rideOption.id} />)
                }
            </div>

        </div>
    );
};

export default ChooseRide;