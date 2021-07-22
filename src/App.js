import './App.css';
import Bar from './components/navbar';
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/homepage";


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/" exact render={(props) => {
          return (
            <>
              <Bar />
              <Home />
            </>
          )
        }} />

        <Route path="/login" render={(props) => {
          return (
            <div>
              <Bar />
              <Login />
            </div>
          )
        }} />

        <Route path="/signup" render={(props) => {
          return (
            <Signup />
          )
        }} />
      </Router>

    </div>
  );
}

export default App;
