import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    // console.log(courses);
    return (
        <div className="courses-container">
            <div className="course-container">
                {
                    courses.map(course =>
                        <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                }
            </div>

        </div>

    );

};

export default Courses;