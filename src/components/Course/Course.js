import React from 'react';

const Course = (props) => {
    // const { id, name, duration, price, instructor, level, img } = props.course;
    console.log(props.course);
    return (
        <div>
            <h1>Courses</h1>
            {/* <h1>{id}</h1>
            <h1>{name}</h1>
            <img src={img} alt="" /> */}
        </div>
    );
};

export default Course;