import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Jumbotron, Container} from 'reactstrap';

function Home(props) {
    return(
        <Jumbotron id="homeJumbo">
            <Container fluid>
                <Carousel id="homeCarousel">
                    {props.details.map((item) => (
                        <Carousel.Item id="homeCarouselItem">
                            <img id="homeCarouselImg" className="d-block w-100" key={item.id} src={item.path} alt={item.name}/>
                            <Carousel.Caption>
                                <div id="carouselCaption" className="carousel-caption d-none d-md-block">
                                    <div id="captionBackground"></div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </Jumbotron>
    );
}

export default Home;