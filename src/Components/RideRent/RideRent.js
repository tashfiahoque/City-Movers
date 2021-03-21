import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './RideRent.css';

const RideRent = (props) => {
    // https://react-auth-64fa7.web.app/
    // const { avatar, price1, price2, price3 } = props.res;
    const { register, handleSubmit } = useForm();
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
    console.log(searchData);
    return (
        <>
            <div className="col-md-4 col-12 search-form-container">
                {!searchData.isFormSubmit ?
                    <div className="search-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-3">
                                <label htmlFor="pick_from" className="form-label">Pick From</label>
                                <input type="name" name="pick_from" className="form-control" id="pick_from" ref={register} />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="drop_to" className="form-label">Pick To</label>
                                <input type="name" name="drop_to" className="form-control" id="drop_to" ref={register} />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="date_from" className="form-label">Date From</label>
                                <input name="date_from" type="date" className="form-control" id="date_from" ref={register} />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="date_to" className="form-label">Date To</label>
                                <input name="date_to" type="date" className="form-control" id="date_to" ref={register} />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="quantity" className="form-label">Choose total passenger</label>
                                <input type="number" id="quantity" name="quantity" min="1" max="10" className="form-control" ref={register} />
                            </div>
                            <input type="submit" onClick={handleSubmit} />
                        </form>
                    </div>
                    :
                    <div className="search-form-results">
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
                }
            </div>
            <div className="col-md-8 col-12"></div>
        </>
    );
};

export default RideRent;