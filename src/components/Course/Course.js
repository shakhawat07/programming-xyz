import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, duration, price, instructor, level, img } = props.course;
    // console.log(props.course);

    // course image style 
    const courseImgStyle = {
        width: '300px',
        height: '170px',
        border: '2px solid black',
        borderRadius: '15px'
    }
    return (
        <div className="row p-5">
            <div className="col">
                <div className="card h-100 border border-light shadow-lg course-card-background">
                    <div className="card-body course-img">
                        <img className="p-2" style={courseImgStyle} src={img} alt="" />
                        <h3 className="card-title py-3 fs-3 text-black">{name}</h3>
                        <p><span className="text-black fw-bolder">Course Duration:</span> {duration}</p>
                        <p><span className="text-black fw-bolder">Instructor:</span> {instructor}</p>
                        <p><span className="text-black fw-bolder">Level:</span> {level}</p>
                        <p><span className="text-black fw-bolder">Course Cost:</span> {price}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger px-3"
                        > <span className="px-2">Show Details</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;