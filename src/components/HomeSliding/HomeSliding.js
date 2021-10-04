import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeSliding.css'
// style={{ width: '400px', height: '200px' }}
const HomeSliding = () => {
    return (
        <div className="mx-5 p-5 home-sliding-container text-dark">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/05/Python-language.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white fs-2 bg-black rounded">Python Programming in 30 days</h3>
                        <p className="text-white fs-4 bg-black rounded">Course Duration: 40 hours, Course Cost: $50</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/machinelearning.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-white fs-2 bg-black rounded">Intro to Machine Learning in 120 days</h3>
                        <p className="text-white fs-4 bg-black rounded">Course Duration: 160 hours, Course Cost: $200</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/dj4e.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-white fs-2 bg-black rounded">Django Developer in 60 days</h3>
                        <p className="text-white fs-4 bg-black rounded">Course Duration: 80 hours, Course Cost: $100</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default HomeSliding;