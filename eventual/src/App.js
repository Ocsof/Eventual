import './App.css';
import SignUp from "./cmp/SignUp";
import Login from "./cmp/Login";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Routes
} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <aside>Eventual</aside>
          <Router>
              <NavLink to="/login">Login</NavLink>
              <br/>
              <NavLink to="/signup">Sign Up</NavLink>
              <br/>
              <hr />
              <Routes>
                  <Route exact path="/login" element={<Login/>} />
                  <Route exact path="/signup" element={<SignUp />} />
              </Routes>
          </Router>
    </div>
  );
}

export default App;
