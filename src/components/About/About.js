import React from 'react';
import './About.css'
const About = () => {
    return (
        <section className="m-5">
            <div className="py-4 container-fluid">
                <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 about-container rounded">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="text-start p-4">
                            <h2 className="card-title fw-bold text-black">About Us</h2>
                            <p>Our purpose of these courses are to study fundamentals concepts in programming languages and major tools and techniques to implement them. This includes syntax specification and informal semantic models; binding and scoping; types and type systems; control structures; data abstraction; procedural abstraction and parameter passing; higher-order functions; and memory management.</p>
                            <button className="btn btn-danger">Details</button>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 cl-sm-12 col-12">
                        <img style={{ width: '600px', height: '400px' }} src="https://candid.technology/wp-content/uploads/2019/11/Computer-programming-languages-coding-329090sd-java-python-php.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;