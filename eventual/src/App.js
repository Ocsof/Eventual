import './App.css';
import SignUp from "./cmp/SignUp";
import Home from "./cmp/Home";
import Login from "./cmp/Login";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
    Link
} from "react-router-dom";


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
                  <input
                      className="search"
                      type="text"
                      placeholder="search..."
                      onChange={inputHandler}
                  />
              </nav>
              <div className="App-content">
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route exact path="/login" element={<Login/>} />
                      <Route exact path="/signup" element={<SignUp />} />
                  </Routes>
              </div>
          </Router>
    </div>
  );
}

export default App;
