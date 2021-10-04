import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="pb-4 home">
            <div>
                <h1 className="text-black py-3 fw-bold">Welcome to Programming XYZ</h1>
                <h5 className="px-2 mx-2 home-details fw-normal text-black">Our purpose of these courses are to study fundamentals concepts in programming languages and major tools and techniques to implement them. This includes syntax specification and informal semantic models; binding and scoping; types and type systems; control structures; data abstraction; procedural abstraction and parameter passing; higher-order functions; and memory management.</h5>

            </div>

        </div>
    );
};

export default Home;