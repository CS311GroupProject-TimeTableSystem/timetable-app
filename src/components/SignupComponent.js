import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Signup.css";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      cpassword:''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }
  handleChange(event) {
    this.setState({password: event.target.value});
 }
  handleChange1(event) {
    this.setState({cpassword: event.target.value});
 }
  
  handleSubmit(event) {
    if(this.state.password===this.state.cpassword){
      alert("Succesfully Registered")
      document.getElementById("userForm").reset();
      document.getElementById("password").reset();

    }else{
      alert("Password Doesn't Matched")
    }
    event.preventDefault();
  }
  render(){
  return  (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left d-none d-md-flex"> </div>
            <div className="card-body">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/home"> Home </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active> Sign Up </BreadcrumbItem>
              </Breadcrumb>
              <body>
                <div className="col-12">
                  <h3> Sign Up </h3> <hr />
                  <form
                    id="userForm"
                    className="form-signin"
                    onSubmit={this.handleSubmit}
                  >
                  <label htmlFor="chooseType"> Account Type </label>

                  <select className="selecter">
  <option value="Teacher">Teacher</option>
  <option value="Student">Student</option>
  </select>
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="inputUserame"
                        className="form-control"
                        placeholder="Username"
                        required
                        autofocus
                      />
                      <label htmlFor="inputUserame"> Username </label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                      />
                      <label htmlFor="inputEmail"> Email address </label>
                    </div>
                    <hr />
                    <div className="form-label-group">
                      <input                  
                        type="password"
                        id="inputPassword"
                        class="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputConfirmPassword"
                        class="form-control"
                        placeholder="Password"
                        value={this.state.cpassword}
                        onChange={this.handleChange1}
                        required
                      />
                      <label htmlFor="inputConfirmPassword">Confirm password</label>
                    </div>

                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      value="Submit"
                      type="submit"
                    >
                      Register
                    </button>
                    <a
                      className="d-block text-center mt-2 small"
                      href="loginpage.html"
                    >
                      Sign In
                    </a>
                    <hr className="my-4" />
                  </form>
                </div>
              </body>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-content"> </div>
    </div>
  );
}

}

export default Signup;
