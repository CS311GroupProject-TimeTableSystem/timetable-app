import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function Help(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Help</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Help</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                
            </div>
        </div>
    );
}

export default Help;