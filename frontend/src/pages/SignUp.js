import React from 'react';
import {Link} from "react-router-dom";
import {NotificationManager} from "react-notifications";
import axios from 'axios';

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            password: '',
            birthday: '2000-01-01',
            category: 'p',
            inscriptions: [],
            my_organizations: []
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleSurnameChange(event) {
        this.setState({surname: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleCategoryChange(event) {
        this.setState({category: event.target.value})
    }

    handleBirthdayChange(event){
        this.setState({birthday: event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:8082/signup', {
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            birthday: this.state.birthday,
            category: this.state.category,
            inscriptions: [],
            my_organizations: []
        })
            .then(response => {
                if (response.status === 200) {
                    NotificationManager.success("Signup ok!");
                    this.handleReset()
                }
            })
            .catch(error => {
                console.error(error)
                if(error.response.status === 409){
                    NotificationManager.error("Utente già registrato con questa email")
                }
            });

    }

    handleReset() {
        this.setState({
            name: '',
            surname: '',
            email: '',
            phone: '',
            password: '',
            birthday: '01/01/2000',
            category: 'p',
            inscriptions: [],
            my_organizations: []
        })
    }

    render () { return(
        <section className="gradient-custom m-2">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{borderRadius: "25px"}}>
                            <div className="card-body p-md-2">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-2 mt-2">Sign up</p>

                                        <form className="small" onSubmit={this.handleSubmit} onReset={this.handleReset} autoComplete="new-password">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="SignUpName"
                                                        className="form-control"
                                                        value={this.state.name}
                                                        onChange={this.handleNameChange}
                                                        required={true}
                                                    />
                                                    <label className="form-label" htmlFor="SignUpName">Name</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="SignUpSurname"
                                                        className="form-control"
                                                        value={this.state.surname}
                                                        onChange={this.handleSurnameChange}
                                                        required={true}
                                                    />
                                                    <label className="form-label" htmlFor="SignUpSurname">Surname</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        id="SignupEmail"
                                                        className="form-control"
                                                        value={this.state.email}
                                                        onChange={this.handleEmailChange}
                                                        required={true}
                                                    />
                                                    <label className="form-label" htmlFor="SignupEmail">Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="tel"
                                                        id="SignUpPhone"
                                                        className="form-control"
                                                        value={this.state.phone}
                                                        onChange={this.handlePhoneChange}
                                                    />
                                                    <label className="form-label"
                                                           htmlFor="SignUpPhone">Phone</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        id="SignUpPassword"
                                                        className="form-control"
                                                        value={this.state.password}
                                                        onChange={this.handlePasswordChange}
                                                        required={true}
                                                    />
                                                    <label className="form-label" htmlFor="SignUpPassword">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-cake-candles fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="date"
                                                           id="SignUpBirthday"
                                                           className="form-control"
                                                           defaultValue="2000-01-01"
                                                           onChange={this.handleBirthdayChange}
                                                    />
                                                    <label className="form-label" htmlFor="SignUpBirthday">Birthday</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user-secret fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <select
                                                        id="category"
                                                        name="category"
                                                        onChange={this.handleCategoryChange}
                                                        value={this.state.category}
                                                    >
                                                        <option value="p">Client / Participant</option>
                                                        <option value="o">Organizer</option>
                                                    </select>
                                                    <br />
                                                    <label className="form-label" htmlFor="category">Category</label>
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" id="terms" required={true}/>
                                                <label className="form-check-label" htmlFor="terms">
                                                    I agree all statements in <Link to="/terms_conditions">Terms of service</Link>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="reset" className="btn btn-primary btn-lg m-2">Reset</button>
                                                <button type="submit" className="btn btn-primary btn-lg m-2">Submit</button>
                                                <Link to="/login" className="small mt-4">Already registered?</Link>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                             className="img-fluid" alt="Sample signup" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )}
}

export default SignupForm;