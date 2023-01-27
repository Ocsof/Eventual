import React from 'react';
import {Link} from "react-router-dom";
import {NotificationManager, NotificationContainer} from "react-notifications";
import {useFormik} from "formik";
import {ERROR_LETTERS, MAX_LETTERS} from "../../utilities/validator";


const validate = values => {
    const errors = {
        name: '',
        surName: '',
        password: '',
        email: ''
    };

    if (values.name.length === 0 || values.name.length > MAX_LETTERS) {
        errors.name = ERROR_LETTERS;
    }

    if (values.surName.length === 0 || values.surName.length > MAX_LETTERS) {
        errors.surName = ERROR_LETTERS;
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
};

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surName: '',
            email: '',
            phone: '',
            password: '',
            birthday: '01/01/2000',
            category: 'p'
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleSurnameChange(event) {
        this.setState({surName: event.target.value});
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

    handleSubmit() {
        alert(JSON.stringify(this.state, null, 2));
        NotificationManager.on("Signup ok!")
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

                                        <form className="small" onSubmit={this.handleSubmit} >

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
                                                    {/*this.formik.errors.name ? <div className="error">{this.formik.errors.name}</div> : null*/}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="SignUpSurname"
                                                        className="form-control"
                                                        value={this.state.surName}
                                                        onChange={this.handleSurnameChange}
                                                        required={true}
                                                    />
                                                    <label className="form-label" htmlFor="SignUpSurname">Surname</label>
                                                    {/*this.formik.errors.surName ? <div className="error">{this.formik.errors.surName}</div> : null*/}
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
                                                    {/*this.errors.email ? <div className="error">{this.formik.errors.email}</div> : null*/}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
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
                                                    {/*this.formik.errors.password ? <div className="error">{this.formik.errors.password}</div> : null*/}
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="date"
                                                           id="SignUpBirthday"
                                                           className="form-control"
                                                           defaultValue="01/01/2000"
                                                    />
                                                    <label className="form-label" htmlFor="SignUpBirthday">Birthday</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <select
                                                        id="category"
                                                        name="category"
                                                    >
                                                        <option value="p">Client / Participant</option>
                                                        <option value="o">Organizer</option>
                                                    </select>
                                                    <label className="form-label" htmlFor="SignUpBirthday">Category</label>
                                                </div>
                                            </div>


                                            <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="terms"/>
                                                <label className="form-check-label" htmlFor="terms">
                                                    I agree all statements in <a href="https://www.google.com">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="reset" className="btn btn-primary btn-lg">Reset</button>
                                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                                <Link to="/login" className="small m-2">Already registered?</Link>
                                            </div>
                                            <NotificationContainer />
                                        </form>

                                    </div>
                                    <div
                                        className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

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