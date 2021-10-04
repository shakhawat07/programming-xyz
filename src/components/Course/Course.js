import React from 'react';

const Course = (props) => {
    const { name, duration, price, instructor, level, img } = props.course;
    // console.log(props.course);
    // const courseStyle = {
    //     border: '3px solid goldenrod',
    //     margin: '10px',
    //     padding: '10px',
    //     borderRadius: '10px',
    //     color: 'white'
    // }
    return (

        <div className="row course p-5">
            <div className="col">
                <div className="card h-100 border border-light shadow-lg card-background">
                    <div className="card-body">
                        <img style={{ width: '300px', height: '170px' }} src={img} alt="" />
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
        // <Row xs={1} md={3} className="g-4">
        //     <Col>
        //         <Card>
        //             <Card.Img style={{ width: '300px', height: '170px' }} variant="top" src={img} />
        //             <Card.Body>
        //                 <Card.Title className="text-white">Card title</Card.Title>
        //                 <Card.Text>
        //                     This is a longer card with supporting text below as a natural
        //                     lead-in to additional content. This content is a little bit longer.
        //                 </Card.Text>
        //             </Card.Body>
        //         </Card>
        //     </Col>
        // </Row>



    );
};

export default Course;