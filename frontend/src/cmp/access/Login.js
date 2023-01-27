import React from 'react';
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogged: false
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        if( this.state.password !== '' && this.state.email !== ''){
            /*
                TODO: change with control function on database subscribes
            */
            alert('Login effettuato con successo: ' + this.state.email);
            this.setState({
                isLogged: true
            })
        } else {
            alert('Email o password non corretta');
        }
        event.preventDefault();
    }

    render() {
        return (
            <section className="gradient-custom">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                 className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={this.handleSubmit}>
                                <div
                                    className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    <a href="https://www.facebook.com" type="button" className="btn btn-primary btn-floating mx-1 rounded-circle">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>

                                    <a href="https://www.twitter.com" type="button" className="btn btn-primary btn-floating mx-1 rounded-circle">
                                        <i className="fab fa-twitter"></i>
                                    </a>

                                    <a href="https://www.linkedin.com" type="button" className="btn btn-primary btn-floating mx-1 rounded-circle">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a href="https://www.google.com" type="button" className="btn btn-primary btn-floating mx-1 rounded-circle  ">
                                        <i className="fab fa-google"></i>
                                    </a>
                                </div>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                           placeholder="Enter a valid email address" onChange={this.handleEmailChange}/>
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                           placeholder="Enter password" onChange={this.handlePasswordChange}/>
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value=""
                                               id="form2Example3"/>
                                        <label className="form-check-label" htmlFor="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <Link to="/passwordRecover" className="link-danger small">Forgot password?</Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg"
                                            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} >Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/signup"
                                                                                                          className="text-body">Register</Link>
                                    </p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Login;