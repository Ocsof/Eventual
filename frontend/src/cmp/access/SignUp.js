import React from 'react';
import {useFormik} from 'formik';
import {Link} from "react-router-dom";
import {NotificationManager, NotificationContainer} from "react-notifications";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const maxLetters = 20;
const errorsLetters = 'Must be' + maxLetters + 'characters or less';
const validate = values => {
    const errors = {};
    if (values.firstName.length > maxLetters) {
        errors.firstName = errorsLetters;
    }

    if (values.lastName.length > maxLetters) {
        errors.lastName = errorsLetters;
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    }
    if (!values.password) {
        errors.phone = 'Required';
    }
    return errors;
};

const SignupForm = () => {
    // Pass the useFormik() hook initial form values, a validate function that will be called when
    // form values change or fields are blurred, and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            category: 'cl'
        },
        validate,
        onSubmit: values => {
            /*
                TODO change with saving information in the database
             */
            alert(JSON.stringify(values, null, 2));
            NotificationManager.success('Signing up successfully!');
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} onReset={formik.resetForm} >
            <label htmlFor="firstName" className="m-2">Nome: </label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            {formik.errors.firstName ? <div className="error">{formik.errors.firstName}</div> : null}
            <br/>
            <label htmlFor="lastName" className="m-2">Cognome: </label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div className="error">{formik.errors.lastName}</div> : null}
            <br/>
            <label htmlFor="email" className="m-2">Email: </label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
            <br/>
            <label htmlFor="phone" className="m-2">Telefono: </label>
            <input
                id="phone"
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                value={formik.values.phone}
            />
            {formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
            <br/>
            <label htmlFor="password" className="m-2">Password </label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
            <br/>
            <label htmlFor="category" className="m-2">Categoria: </label>
            <select
                id="category"
                name="category"
                onChange={formik.handleChange}
                value={formik.values.category}
            >
                <option value="cl">Cliente</option>
                <option value="org">Organizzatore</option>
                <option value="amm">Amministratore</option>
            </select>
            <br/>
            <button type="reset" className="m-2">Reset</button>
            <button type="submit" className="m-2">Submit</button>
            <br/>
            <Link to="/login" className="small m-2">Sei già iscritto?</Link>
            <NotificationContainer />
        </form>
    );
};

export default SignupForm;