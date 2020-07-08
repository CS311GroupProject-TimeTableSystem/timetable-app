import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 col-sm-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link style={{ textDecoration: 'none' }} to="/home" href="#">Home</Link></li>
                            <li><Link style={{ textDecoration: 'none' }} to="/timetables" href="#">Time Tables</Link></li>
                            <li><Link style={{ textDecoration: 'none' }} to="/about" href="#">About</Link></li>
                            <li><Link style={{ textDecoration: 'none' }} to="/help" href="#">Help</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-9">
                        <h5>Address</h5>
                        <address id="addr">
                        CP/G Weera Wijaya Wimalarathana M.V.,<br />
                        Sigiriya Road,<br />
                        Inamaluwa.<br />
                        <i className="fa fa-phone fa-lg"></i>: +654656565646<br />
                        <i className="fa fa-fax fa-lg"></i>: +654656565646<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:test@test.net">
                            test@test.net</a>
                        </address>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright CP/G Weera Wijaya Wimalarathne M.V.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;