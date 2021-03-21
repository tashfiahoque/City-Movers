import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import GoogleMap from '../GoogleMap/GoogleMap';
import OptionChoose from '../OptionChoose/OptionChoose';
import './RideRent.css';

const RideRent = (props) => {

    const optionsDetails = props.res;
    const { register, handleSubmit, errors } = useForm();
    const [searchData, setSearchData] = useState({
        isFormSubmit: false,
        pick_from: '',
        drop_to: '',
        quantity: '',
        date_from: '',
        date_to: ''
    })

    const onSubmit = (data) => {
        const newSearchData = { ...data };
        newSearchData.isFormSubmit = true;
        setSearchData(newSearchData);
    }

    return (
        <>
            <div className="col-md-4 col-12 search-form-container">
                {!searchData.isFormSubmit ?
                    <div className="search-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="pick_from" className="form-label">Pick From</label>
                                <input type="name" name="pick_from" className="form-control" id="pick_from" ref={register({ required: true })} />
                                {errors.pick_from && <span>This field is required</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="drop_to" className="form-label">Drop To</label>
                                <input type="name" name="drop_to" className="form-control" id="drop_to" ref={register({ required: true })} />
                                {errors.drop_to && <span>This field is required</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date_from" className="form-label">Date From</label>
                                <input name="date_from" type="date" className="form-control" id="date_from" ref={register({ required: true })} />
                                {errors.date_from && <span>This field is required</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date_to" className="form-label">Date To</label>
                                <input name="date_to" type="date" className="form-control" id="date_to" ref={register({ required: true })} />
                                {errors.date_to && <span>This field is required</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Choose total passenger</label>
                                <input type="number" id="quantity" name="quantity" min="1" max="10" className="form-control" ref={register} />
                            </div>
                            <input type="submit" onClick={handleSubmit} />
                        </form>
                    </div>
                    :
                    <div className="search-form-results">
                        <div className="search-form-timeline">
                            <div className="timeline-container">
                                <div className="timeline-text left">
                                    <div className="content">
                                        <h2>{searchData.pick_from}</h2>
                                    </div>
                                </div>
                                <div className="timeline-text left">
                                    <div className="content">
                                        <h2>{searchData.drop_to}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="search-form-choose-options">
                            <OptionChoose searchData={searchData} optionsDetails={optionsDetails} />
                        </div>
                    </div>
                }
            </div>
            <div className="col-md-8 col-12">
                <GoogleMap />
            </div>
        </>
    );
};

export default RideRent;