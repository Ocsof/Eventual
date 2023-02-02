import {Route, Routes, NavLink, useNavigate, useLocation} from "react-router-dom";
import SignUp from "./pages/SignUp";
import {Home} from "./pages/Home";
import {Login} from "./pages/Login";
import Notifications from "./pages/Notifications";
import {Admin} from "./pages/intern/Admin";
import React, {useRef, useState} from "react";
import * as PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import {useShoppingCart} from "./cmp/events/ShoppingCartContext";
import {Store} from "./pages/Store";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from "react-notifications";
import {Events} from "./pages/Events";
import {NewEvent} from "./cmp/events/NewEvent";
import {EditProfile} from "./cmp/access/EditProfile";
import {SearchEvents} from "./cmp/events/SearchEvents";
Routes.propTypes = {children: PropTypes.node};

function App() {
    const ref= useRef(null);
    const { openCart, cartQuantity } = useShoppingCart();
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = (e) => {
        e.preventDefault();
        NotificationManager.info("Research for: " + searchInput);
        localStorage.setItem('category', searchInput);
        navigate('/search_events')
    };
    
    return (
      <div className="App" ref={ref}>
              <nav className="App-nav navbar navbar-expand-lg px-4">
                  <NavLink to="/" activeStyle={{ color:'#F57536' }} className="logo navbar-brand">Eventual </NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
                      <ul className="navbar-nav mr-auto d-flex justify-content-between">
                          <li className="nav-item px-2">
                              <NavLink exact to="/login" className="nav-item" activeClassName="active">Login </NavLink>
                          </li>
                          <li className="nav-item px-2">
                              <NavLink exact to="/signup" className="nav-item" activeClassName="active">Sign Up </NavLink>
                          </li>
                          <li className="nav-item px-2">
                              <NavLink exact to="/store_events" className="nav-item" activeClassName="active" >Events </NavLink>
                          </li>
                          <li className="nav-item px-2">
                              <NavLink exact to="/events" className="nav-item" activeClassName="active">My Events </NavLink>
                          </li>
                      </ul>
                      <div className="d-flex mx-5">
                          <input type="search" className="form-control rounded" placeholder="Search..." aria-label="Search"
                                 aria-describedby="search-addon" onChange={(e) => setSearchInput(e.target.value)}/>
                          <button className="input-group-text border-0 mx-1" id="search-addon" onClick={handleSearch}>
                                <i className="fas fa-search"></i>
                          </button>
                      </div>
                  </div>
                  <NavLink to="/notify" className="d-flex m-4">
                      <img src={"img/notification.svg"} alt="notifications" className="link-icon" />
                  </NavLink>
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
              </nav>

              <div className="App-content">
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route exact path="/login" element={<Login />} />
                      <Route exact path="/signup" element={<SignUp />} />
                      <Route exact path="/store_events" element={<Store />} />
                      <Route exact path="/events" element={<Events />} />
                      <Route exact path="/new_event" element={<NewEvent />} />
                      <Route exact path="/notify" element={<Notifications />} />
                      <Route exact path="/edit_profile" element={<EditProfile />} />
                      <Route exact path="/search_events" element={<SearchEvents />} />

                      <Route exact path="/admin" element={<Admin />} />
                      {/*<Route exact path="/passwordRecover" element={<PasswordRecover />} />*/}
                  </Routes>
                  <NotificationContainer />
              </div>
          <footer className="my_footer">
              Copyright 2022 - Francesco Foschini, Alessia Rocco
          </footer>
      </div>
  );
}

export default App;
