import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { auth, firestore, fireauth, firebasestore } from '../firebase/firebase';

class Header extends Component {
    //<></> means <React.Fragment>

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isAuthenticated: false,
            user: ''
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        this.toggleModal();
        auth.setPersistence(this.remember.checked ? fireauth.Auth.Persistence.LOCAL : fireauth.Auth.Persistence.SESSION)
        .then(() =>
        auth.signInWithEmailAndPassword(this.username.value, this.password.value)
        .then(() => {
            var user = auth.currentUser;
            this.setState({isAuthenticated: true});
            console.log('User successfully logged in!');
            localStorage.setItem('user', JSON.stringify(user));
        }))
        .catch(error => console.log(error));
        event.preventDefault();
    }
    handleLogout(event) {
        auth.signOut().then(() => {
            this.setState({isAuthenticated: false});
            console.log('User successfully logged out!');
        }).catch((error) => {
            console.log(error);
        });
        localStorage.removeItem('user');
        event.preventDefault();
    }
    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if(user) {
                this.setState({isAuthenticated: true, user: user.email});
            }
        });
    }
    render() {
        
        return(
            <React.Fragment>
                <Navbar id="navBar" light expand="md">
                <div className="container">
                    <NavbarBrand id="navbarBrand" className="mr-auto" href="/home">TIME TABLES</NavbarBrand>
                    <NavbarToggler id="navToggler" onClick={this.toggleNav}></NavbarToggler>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-5" navbar>
                            <NavItem id="navItem" className="ml-2">
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem id="navItem" className="ml-2">
                                <NavLink className="nav-link" to="/timetables">
                                    <span className="fa fa-table"></span> Time Tables
                                </NavLink>
                            </NavItem>
                            <NavItem id="navItem" className="ml-2">
                                <NavLink className="nav-link" to="/about">
                                    <span className="fa fa-info-circle"></span> About
                                </NavLink>
                            </NavItem>
                            <NavItem id="navItem" className="ml-2">
                                <NavLink className="nav-link" to="/help">
                                    <span className="fa fa-question-circle"></span> Help
                                </NavLink>
                            </NavItem>
                            { !this.state.isAuthenticated ?
                            <NavItem id="navItem" className="ml-2">
                                <NavLink className="nav-link" to="/signup">
                                    <span className="fa fa-user-plus"></span> Sign Up
                                </NavLink>
                            </NavItem>
                            : null}
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                { !this.state.isAuthenticated ?
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                    :
                                    <div>
                                        <div className="navbar-text mr-3">{this.state.user}</div>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                        </Button>
                                    </div>
                                }

                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="md">
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Username</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;