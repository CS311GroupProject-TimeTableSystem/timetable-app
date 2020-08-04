import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Jumbotron} from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import {Loading} from '../components/LoadingComponent'

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else {
        return(
            <Card id="homeCard">
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

function RenderCarousel({details, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading/>
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <Carousel id="homeCarousel">
                {details.map((item) => (
                    <Carousel.Item key={item.id} id="homeCarouselItem">
                        <img id="homeCarouselImg" className="d-block w-100" key={item.id} src={item.path} alt={item.name}/>
                        <Carousel.Caption id="homeCarouselCaption">
                            <div id="carouselCaption" className="carousel-caption d-none d-md-block">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        );
}

function Home(props) {
    console.log(props.carouselErrMess);
    return(
        <div>
            <Jumbotron id="homeJumbo">
                <div className="container-fluid">
                    <RenderCarousel details={props.details} isLoading={props.carouselLoading} errMess={props.carouselErrMess}/>
                </div>
            </Jumbotron>
            <div className="container-fluid">
                <div id="homeCardRow" className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.calendar} 
                            isLoading={props.calendarLoading}
                            errMess={props.calendarErrMess} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.staff} 
                            isLoading={props.staffLoading}
                            errMess={props.staffErrMess} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.notice} 
                            isLoading={props.noticeLoading} 
                            errMess={props.noticeErrMess} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;