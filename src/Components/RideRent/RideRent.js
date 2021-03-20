import React from 'react';
import { useForm } from "react-hook-form";


const RideRent = (props) => {

    console.log(props.result)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className="col-md-4 col-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-3">
                        <label htmlFor="pick_from" classname="form-label">Pick From</label>
                        <input type="name" name="pick_from" className="form-control" id="pick_from" ref={register} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="pick_to" classname="form-label">Pick To</label>
                        <input type="name" name="pick_to" className="form-control" id="pick_to" ref={register} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="date_from" classname="form-label">Date From</label>
                        <input name="date_from" type="date" className="form-control" id="date_from" ref={register} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="date_to" classname="form-label">Date To</label>
                        <input name="date_to" type="date" className="form-control" id="date_to" ref={register} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="quantity" classname="form-label">Choose total passenger</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="5" className="form-control" ref={register} />
                    </div>
                    <input type="submit" />
                </form>
            </div>
            <div className="col-md-8 col-12"></div>
        </>
    );
};

export default RideRent;