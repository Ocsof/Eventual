// noinspection ES6CheckImport
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
    Link
} from "react-router-dom";
import SignUp from "./cmp/SignUp";
import Home from "./cmp/Home";
import Login from "./cmp/Login";
import Notifications from "./cmp/Notifications";
import ShoppingCart from "./cmp/ShoppingCart";
import Contacts from "./cmp/Contacts";
import Events from "./cmp/Events";
import Admin from "./cmp/intern/Admin";
import React, {useState} from "react";
import * as PropTypes from 'prop-types';
import PasswordRecover from "./cmp/PasswordRecover";

Routes.propTypes = {children: PropTypes.node};

function App() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    let handleChange = () => {
        /*
        TODO: change with research on the database
         */

    };

  return (
      <div className="App">
          <Router >
              <nav className={"App-nav"}>
                  <NavLink to="/" className="logo">Eventual </NavLink>
                  <NavLink to="/login">Login </NavLink>
                  <NavLink to="/signup">Sign Up </NavLink>
                  <NavLink to="/events">Eventi </NavLink>
                  <NavLink to="/contacts">Contatti </NavLink>
                  <input
                      id="outlined-basic"
                      variant="outlined"
                      label="Search"
                      onChange={inputHandler}
                  />
                  <Link to="/notify" className="link-icon"> <img src="img/notification.svg" alt="notifications" className="icon" /> </Link>
                  <Link to="/cart" className="link-icon"> <img src="img/shopping-cart.svg" alt="shopping cart" className="icon" /> </Link>
              </nav>
              <div className="App-content">
                  <Routes>
                      <Route exact path="/" element={<Home/>} />
                      <Route exact path="/login" element={<Login/>} />
                      <Route exact path="/signup" element={<SignUp />} />
                      <Route exact path="/notify" element={<Notifications />} />
                      <Route exact path="/cart" element={<ShoppingCart />} />
                      <Route exact path="/contacts" element={<Contacts />} />
                      <Route exact path="/events" element={<Events />} />
                      <Route exact path="/admin" element={<Admin />} />
                      <Route exact path="/passwordRecover" element={<PasswordRecover />} />
                  </Routes>
              </div>
          </Router>
          <footer>
              Copyright 2022 - Francesco Foschini, Alessia Rocco
          </footer>
    </div>
  );
}

export default App;
