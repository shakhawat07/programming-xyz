import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [courses]);
    console.log(courses);
    return (
        <div>

            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }

        </div>
    );

};

export default Courses;