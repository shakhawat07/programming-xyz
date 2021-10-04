import React, { useEffect, useState } from 'react';
import HomeSliding from '../HomeSliding/HomeSliding';
import TrendingCourses from '../TrendingCourses/TrendingCourses';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <div className="pb-4">
            {/* top section */}
            <section>
                <div className="container-fluid home-heading py-3 px-5">
                    <h1 className="py-3 fw-lighter">Welcome to Programming XYZ</h1>
                    <h5 className="px-2 mx-2 home-details fw-lighter">Our purpose of these courses are to study fundamentals concepts in programming languages and major tools and techniques to implement them. This includes syntax specification and informal semantic models; binding and scoping; types and type systems; control structures; data abstraction; procedural abstraction and parameter passing; higher-order functions; and memory management.</h5>
                </div>
            </section>
            {/* sliding section */}
            <section>
                <HomeSliding></HomeSliding>
            </section>
            <div className="container-fluid">
                <h1 className="fw-bold home-trending-title">Trending Courses</h1>
            </div>
            {/* trending course section  */}
            <section className="home-course-container mb-5">
                {
                    courses.slice(0, 4).map(course => <TrendingCourses
                        key={course.id}
                        course={course}
                    ></TrendingCourses>
                    )
                }
            </section>
        </div >
    );
};

export default Home;