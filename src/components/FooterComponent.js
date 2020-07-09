import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-sm-4">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link style={{ textDecoration: 'none' }} to="/home" href="#">Home</Link></li>
                            <li><Link style={{ textDecoration: 'none' }} to="/timetables" href="#">Time Tables</Link></li>
                            <li><Link style={{ textDecoration: 'none' }} to="/about" href="#">About</Link></li>
                            <li><Link style={{ textDecoration: 'none' }} to="/help" href="#">Help</Link></li>
                        </ul>
                    </div>
                    <hr className="d-block d-sm-none"/>
                    <div className="col-sm-4">
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
                    <hr className="d-block d-sm-none"/>
                    <div className="col-sm-4 d-sm-block d-none">
                        <p>"Education is what remains after one has forgotten what one has learned in school"<br/> – Albert Einstein - </p>
                        <p>"Education is the key to success"</p>
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