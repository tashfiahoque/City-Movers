import React from 'react';
import './OptionChoose.css';
import peopleIcon from './peopleicon.png';

const OptionChoose = (props) => {

    const { avatar, title, price1, price2, price3 } = props.optionsDetails;

    return (
        <>
            <div className="options">
                <div className="row items d-flex justify-content-center align-items-center">
                    <div className="col-md-10 col-9">
                        <ul className="list-group list-group-horizontal d-flex justify-content-center align-items-center">
                            <li className="list-group-item"><img src={avatar} alt={title} /></li>
                            <li className="list-group-item"><h4>{title}</h4></li>
                            <li className="list-group-item"><img src={peopleIcon} alt="peopleIcon" /></li>
                            <li className="list-group-item"><small>4</small></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-3">
                        <ul className="list-group">
                            <li className="list-group-item"> <h1>${price1}</h1></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="options">
                <div className="row items d-flex justify-content-center align-items-center">
                    <div className="col-md-10 col-9">
                        <ul className="list-group list-group-horizontal d-flex justify-content-center align-items-center">
                            <li className="list-group-item"><img src={avatar} alt={title} /></li>
                            <li className="list-group-item"><h4>{title}</h4></li>
                            <li className="list-group-item"><img src={peopleIcon} alt="peopleIcon" /></li>
                            <li className="list-group-item"><small>6</small></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-3">
                        <ul className="list-group">
                            <li className="list-group-item"> <h1>${price2}</h1></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="options">
                <div className="row items d-flex justify-content-center align-items-center">
                    <div className="col-md-10 col-9">
                        <ul className="list-group list-group-horizontal d-flex justify-content-center align-items-center">
                            <li className="list-group-item"><img src={avatar} alt={title} /></li>
                            <li className="list-group-item"><h4>{title}</h4></li>
                            <li className="list-group-item"><img src={peopleIcon} alt="peopleIcon" /></li>
                            <li className="list-group-item"><small>10</small></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-3">
                        <ul className="list-group">
                            <li className="list-group-item"> <h1>${price3}</h1></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OptionChoose;