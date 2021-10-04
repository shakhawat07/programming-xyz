import React, { useEffect, useState } from 'react';
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
        <div className="pb-4 home">
            <section>
                <div className="container-fluid home-heading py-3 px-5">
                    <h1 className="py-3 fw-lighter">Welcome to Programming XYZ</h1>
                    <h5 className="px-2 mx-2 home-details fw-lighter">Our purpose of these courses are to study fundamentals concepts in programming languages and major tools and techniques to implement them. This includes syntax specification and informal semantic models; binding and scoping; types and type systems; control structures; data abstraction; procedural abstraction and parameter passing; higher-order functions; and memory management.</h5>
                </div>
            </section>
            <div className="container-fluid">
                <h1 className="fw-bold home-trending-title rounded ">Trending Courses</h1>
            </div>
            <section className="home-course-container mb-5">
                {
                    courses.slice(0, 4).map(course => <TrendingCourses
                        key={course.id}
                        course={course}
                    ></TrendingCourses>
                        // <div className="pb-4 container-fluid">
                        //     <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 bg-white rounded">
                        //         <div className="col-lg-5 col-md-12 cl-sm-12 col-12">
                        //             <img style={{ width: '200px', height: '130px' }} src={course.img} alt="" />
                        //         </div>
                        //         <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                        //             <div className="text-start ps-2">
                        //                 <h4 className="card-title fw-bold text-black">{course.name}</h4>
                        //                 <p><span className="text-black fw-bolder">Course Duration:</span> {course.duration}</p>
                        //                 <p><span className="text-black fw-bolder">Course Cost:</span> {course.price}</p>
                        //             </div>

                        //         </div>
                        //     </div>
                        // </div>
                    )
                }

            </section>
        </div >
    );
};

export default Home;