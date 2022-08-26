import './App.css';
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

function App() {
    let inputHandler = () => {
        /*
        TODO: change with research on the database
         */
    };

  return (
      <div className="App">
          <Router>
              <nav className={"App-nav"}>
                  <Link to="/" className="logo">Eventual </Link>
                  <NavLink to="/login">Login </NavLink>
                  <NavLink to="/signup">Sign Up </NavLink>
                  <NavLink to="/contacts">Contatti </NavLink>
                  <input
                      className="search"
                      type="text"
                      placeholder="search..."
                      onChange={inputHandler}
                  />
                  <Link to="/notify" className="link-icon"> <img src="img/notification.png" alt="notifications" className="icon" /> </Link>
                  <Link to="/cart" className="link-icon"> <img src="img/shopping-cart.png" alt="shopping cart" className="icon" /> </Link>
              </nav>
              <div className="App-content">
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route exact path="/login" element={<Login/>} />
                      <Route exact path="/signup" element={<SignUp />} />
                      <Route exact path="/notify" element={<Notifications />} />
                      <Route exact path="/cart" element={<ShoppingCart />} />
                      <Route exact path="/contacts" element={<Contacts />} />
                  </Routes>
              </div>
          </Router>
    </div>
  );
}

export default App;
