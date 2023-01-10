import React from 'react';
import {Link} from "react-router-dom";
import Home from "./Home";

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
        if(!this.state.isLogged) {
            return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="text" alt="email" autoComplete="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" alt="password" autoComplete="current-password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <Link to="/passwordRecover">Ho dimenticato la password</Link>
                <br/>
                <Link to="/signup">Clicca qui se non sei ancora iscritto</Link>
            </div>
            )
        } else {
            return (
                <div>
                    <Home />
                </div>
            )
        }
    }
}

export default Login;