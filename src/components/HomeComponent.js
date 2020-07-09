import React, { createRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Jumbotron} from 'reactstrap';



function Home(props) {
    return(
        <Jumbotron id="homeJumbo">
            <div className="container-fluid">
                <Carousel id="homeCarousel">
                    {props.details.map((item) => (
                        <Carousel.Item key={item.id} id="homeCarouselItem">
                            <img id="homeCarouselImg" className="d-block w-100" key={item.id} src={item.path} alt={item.name}/>
                            <Carousel.Caption id="homeCarouselCaption">
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </Jumbotron>
    );
}

export default Home;