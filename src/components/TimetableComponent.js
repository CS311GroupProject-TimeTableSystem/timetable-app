import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function TimeTable(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Time Tables</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Time Tables</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Time Tables</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                
            </div>
        </div>
    );
}

export default TimeTable;