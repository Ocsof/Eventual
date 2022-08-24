import './App.css';
import SignUp from "./cmp/SignUp";

function App() {
  return (
      <div className="App">
          <aside>Eventual</aside>
        <nav>
            <h1>Login</h1>
            <h1>Sign Up</h1>
        </nav>
        <header className="App-header">
            {/*<Login />*/}
            <SignUp />
        </header>
    </div>
  );
}

export default App;
