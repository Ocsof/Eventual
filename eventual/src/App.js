import './App.css';
import Login from "./cmp/Login";

function App() {
  return (
      <div className="App">
          <aside>Eventual</aside>
        <nav>
            <h1>Login</h1>
            <h1>Sign Up</h1>
        </nav>
        <header className="App-header">
            <Login />
        </header>
          <div>
              <p>Ho dimenticato la password</p>
              <p>Clicca qui se non sei ancora iscritto</p>
          </div>
    </div>
  );
}

export default App;
