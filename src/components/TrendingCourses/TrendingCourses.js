import React from 'react';

const TrendingCourses = (props) => {
    const { img, name, duration, price } = props.course;
    return (
        <div className="pb-4 container-fluid">
            <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 bg-white rounded">
                <div className="col-lg-5 col-md-12 cl-sm-12 col-12">
                    <img className="border border-dark border-2 rounded p-2" style={{ width: '200px', height: '130px' }} src={img} alt="" />
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                    <div className="text-start ps-2">
                        <h4 className="card-title fw-bold text-black">{name}</h4>
                        <p><span className="text-black fw-bolder">Course Duration:</span> {duration}</p>
                        <p><span className="text-black fw-bolder">Course Cost:</span> {price}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TrendingCourses;