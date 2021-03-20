import React from 'react';
import ChooseRide from '../ChooseRide/ChooseRide';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <ChooseRide />
        </div>
    );
};

export default Home;