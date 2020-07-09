import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Signup(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Sign Up</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Sign Up</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                
            </div>
        </div>
    );
}

export default Signup;