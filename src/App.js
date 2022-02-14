import './App.css';
import { useState } from 'react';
import Container from './Component';
import Header from './Logo';

function App() {
  const [login, setLogin] = useState(false)
  return (
    <div className="App">
      <header>
        <h1>{
          login ? 'Welcome Back' : 'Please Login'
        }
        </h1>
        <div>
          {
            login ?
              <button onClick={() => setLogin(false)} className= "Button1"> Log Out</button>
              :
              <button onClick={() => setLogin(true)} className= "Button2">Login</button>
          }
        </div>
      
      </header>
      {login && <>
      <Header />
      <Container />
      </> }
    </div>
  );
}

export default App;
