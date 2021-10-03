import React from 'react';

const Course = (props) => {
    const { id, name, duration, price, instructor, level, img } = props.course;
    // console.log(props.course);
    const friendStyle = {
        border: '3px solid goldenrod',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
        color: 'white'
    }
    return (
        <div style={friendStyle}>
            <img style={{ width: '300px', height: '170px' }} src={img} alt="" />
            <h1>{id}</h1>
            <h1>{name}</h1>

        </div>
    );
};

export default Course;