import React from 'react';
import { Link } from 'react-router-dom';
import './RideOption.css';

const RideOption = (props) => {

    const { id, title, avatar } = props.rideOption;
    return (
        <>
            <div className="col-md-3">
                <Link to={`destination/${id}`}><div className="ride-card">
                    <img src={avatar} alt={title} />
                    <div className="card-body">
                        <h1 className="text-center">{title}</h1>
                    </div>
                </div>
                </Link>
            </div>

        </>

    );
};

export default RideOption;