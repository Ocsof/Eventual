import {BrowserRouter as Router, Route, Routes, NavLink, Link} from "react-router-dom";
import SignUp from "./cmp/access/SignUp";
import Home from "./cmp/Home";
import Login from "./cmp/access/Login";
import Notifications from "./cmp/Notifications";
import Admin from "./cmp/intern/Admin";
import React, {useState} from "react";
import * as PropTypes from 'prop-types';
import {Button, Navbar} from "react-bootstrap";
import {useShoppingCart} from "./cmp/events/ShoppingCartContext";
import {Store} from "./cmp/events/Store";
import {ShoppingCart} from "./cmp/events/ShoppingCart";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from "react-notifications";
import {MyEvents} from "./cmp/events/MyEvents";
import {MyOrganizedEvents} from "./cmp/events/MyOrganizedEvents";
import {Events} from "./cmp/Events";
Routes.propTypes = {children: PropTypes.node};

function App() {
    const { openCart, cartQuantity } = useShoppingCart();
    const [searchInput, setSearchInput] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        /*chiamata al database*/
    };
    
    return (
      <div className="App">
          <Router >
              <Navbar className="App-nav position-sticky">
                  <NavLink to="/" className="logo">Eventual </NavLink>
                  <NavLink to="/login">Login </NavLink>
                  <NavLink to="/signup">Sign Up </NavLink>
                  <NavLink to="/store_events">Events </NavLink>
                  <NavLink to="/events">My Events </NavLink>
                  <input
                      id="outlined-basic"
                      variant="outlined"
                      label="Search"
                      onChange={handleChange}
                      value={searchInput}
                      placeholder="Search..."
                  />
                  <Link to="/notify" >
                      <img src={"img/notification.svg"} alt="notifications" className="link-icon" />
                  </Link>
                  <Button
                      onClick={openCart}
                      className="rounded-circle border border-white btn btn-outline-light"
                      variant="outline-primary"
                      style={{width: "3rem", height:"3rem", position:"relative"}}
                  >
                      <img  src={"img/shopping-cart.svg"} alt="shopping cart" className="link-icon" />
                      <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                      style={{color: "white", width:"1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0,
                      transform:"translate(25%, 25%)"}}>
                          {cartQuantity}
                      </div>
                  </Button>
              </Navbar>
              <div className="App-content">
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/login" element={<Login />} />
                      <Route exact path="/signup" element={<SignUp />} />
                      <Route exact path="/store_events" element={<Store />} />
                      <Route exact path="/events" element={<Events />} />
                      <Route exact path="/notify" element={<Notifications />} />

                      <Route exact path="/admin" element={<Admin />} />
                      {/*<Route exact path="/passwordRecover" element={<PasswordRecover />} />*/}
                      {/*<Route exact path="/cart" element={<ShoppingCart  isOpen/>} />*/}
                  </Routes>
                  <NotificationContainer />
              </div>
          </Router>
          <footer>
              Copyright 2022 - Francesco Foschini, Alessia Rocco
          </footer>
      </div>
  );
}

export default App;
