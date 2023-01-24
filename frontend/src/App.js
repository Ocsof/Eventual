import {BrowserRouter as Router, Route, Routes, NavLink, Link} from "react-router-dom";
import SignUp from "./cmp/SignUp";
import Home from "./cmp/Home";
import Login from "./cmp/Login";
import Notifications from "./cmp/Notifications";
import {ShoppingCart} from "./cmp/events/ShoppingCart";
import Contacts from "./cmp/Contacts";
import Admin from "./cmp/intern/Admin";
import React, {useState} from "react";
import * as PropTypes from 'prop-types';
import PasswordRecover from "./cmp/PasswordRecover";
import {Button, Nav} from "react-bootstrap";
import {ShoppingCartProvider, useShoppingCart} from "./cmp/events/ShoppingCartContext";

Routes.propTypes = {children: PropTypes.node};

function App() {
    const [inputText, setInputText] = useState("");
    const { openCart, cartQuantity } = useShoppingCart();

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
      <ShoppingCartProvider>
      <div className="App">
          <Router >
              <Nav className="App-nav">
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
                  <Link to="/notify" className="link-icon"> <img src={"img/notification.svg"} alt="notifications" className="link-icon" /> </Link>
                  <Button
                      onClick={openCart}
                      className="rounded-circle"
                      variant="outline-primary"
                      style={{width: "3rem", height:"3rem", position:"relative"}}
                  >
                      <img  src={"img/shopping-cart.svg"} alt="shopping cart" className="link-icon" />
                  </Button>
              </Nav>
              <div className="App-content">
                  <Routes>
                      <Route exact path="/" element={<Home/>} />
                      <Route exact path="/login" element={<Login/>} />
                      <Route exact path="/signup" element={<SignUp />} />
                      <Route exact path="/notify" element={<Notifications />} />
                      <Route exact path="/contacts" element={<Contacts />} />
                      <Route exact path="/events" element={<ShoppingCart />} />
                      <Route exact path="/admin" element={<Admin />} />
                      <Route exact path="/passwordRecover" element={<PasswordRecover />} />
                  </Routes>
              </div>
          </Router>
          <footer>
              Copyright 2022 - Francesco Foschini, Alessia Rocco
          </footer>
    </div>
      </ShoppingCartProvider>
  );
}

export default App;
