import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {NotificationManager} from "react-notifications";
import {useLogin} from "./LoginContext";
import {Button} from "react-bootstrap";

export function Login(){
    const navigate = useNavigate();
    const {toggleLogin} = useLogin();
    const isLoggedIn = Boolean(localStorage.getItem("logged"));
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    function handleSubmit(e) {
        e.preventDefault()
        /*todo: change with check in the database*/
        if(user.email !== "" && user.password !== ""){
            NotificationManager.success("Benvenuto: " + user.email)
            toggleLogin()
            localStorage.setItem('username', user.email)
            localStorage.setItem('logged', String(isLoggedIn))
            navigate("/events")
        } else {
            NotificationManager.error('Email o password non corretta');
        }
    }

    function handleLogout(e) {
        e.preventDefault()
        NotificationManager.success("Logout")
        toggleLogin()
        localStorage.removeItem('logged')
    }

    return (
        isLoggedIn ? (
            <>
                <section className="gradient-custom w-75">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                    className="img-fluid" alt="Sample logout" />
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center">
                        <h3 className="row d-flex justify-content-center align-items-center">Benvenuto: {localStorage.getItem('username')}</h3>
                        <Button className="btn btn-primary btn-lg m-2" style={{width:"50%"}} onClick={() => navigate("/edit_profile")}>Edit profile <i className="fa-solid fa-user-pen"></i></Button>
                        <Button className="btn btn-primary btn-lg m-2" style={{width:"50%"}} onClick={(e) => handleLogout(e)}>Logout <i className="fa-solid fa-right-from-bracket" /></Button>
                    </div>
                </section>
            </>
        ): (
            <section className="gradient-custom w-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                 className="img-fluid" alt="Sample login" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form onSubmit={e => handleSubmit(e)} autoComplete="current-password">
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
                                    <input type="email" id="loginEmail" className="form-control form-control-lg"
                                           placeholder="Enter a valid email address" onChange={(e) => setUser({...user, email: e.target.value})} value={user.email}/>
                                    <label className="form-label" htmlFor="loginEmail">Email address</label>
                                </div>

                                <div className="form-outline mb-3">
                                    <input type="password" id="loginPw" className="form-control form-control-lg"
                                           placeholder="Enter password" onChange={(e) => setUser({...user, password: e.target.value})} value={user.password}/>
                                    <label className="form-label" htmlFor="loginPw" >Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value=""
                                               id="remember"/>
                                        <label className="form-check-label small" htmlFor="remember">Remember me</label>
                                    </div>
                                    <Link to="/passwordRecover" className="link-danger small">Forgot password?</Link>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" className="btn btn-primary btn-lg" style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}} >
                                        Login
                                    </button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                        <Link to="/signup" className="text-body mx-1">Register</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    )
}