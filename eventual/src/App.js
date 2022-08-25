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
  return (
      <div className="App">
          <Router>
              <aside><Link to="/" className="aside">Eventual </Link></aside>
              <NavLink to="/login">Login </NavLink>
              <NavLink to="/signup">Sign Up </NavLink>
              <header className="App-header">
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route exact path="/login" element={<Login/>} />
                      <Route exact path="/signup" element={<SignUp />} />
                  </Routes>
              </header>
          </Router>
    </div>
  );
}

export default App;
