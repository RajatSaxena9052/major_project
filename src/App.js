import './App.css';
import Bar from './components/bar';
import Login from "./components/loginBody";
import Signup from "./components/signup";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Route path="/" component={Bar} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
      {/* <Bar /> */}
      {/* <LoginBody />
      <Signup /> */}
    </div>
  );
}

export default App;
