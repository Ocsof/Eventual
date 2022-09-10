import React from 'react';

class Admin extends React.Component {

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
                TODO: change with control function on database subscribes for admin page
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
            <div>
                <h1>Admin Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="text" alt="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" alt="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
};

export default Admin;