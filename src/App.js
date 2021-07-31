import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';
import Loggedin from './components/Loggedin';
import Bar from './components/Navbar';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Homepage";
import Cake from "./components/Cake";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>

        <Router>

          <div className="App" >

            < Route path="/" exact render={(props) => {
              return (
                <>
                  <Bar />
                  <Home />
                </>
              )
            }} />

            < Route path="/login" render={(props) => {
              return (
                <div>
                  <Bar />
                  <Login />
                </div>
              )
            }} />

            < Route path="/signup" render={(props) => {
              return (
                <Signup />
              )
            }} />

            < Route path="/loggedin/dashboard" exact render={(props) => {
              return (
                <Loggedin data={props} />
              )
            }} />


            < Route path="/loggedin/friends/:id" render={() => {
              return (
                <Loggedin />
              )
            }} />

            < Route path="/loggedin/addexpenses" exact render={(props) => {
              return (
                <Loggedin {...props} />
              )
            }} />

            < Route path="/loggedin/recent" exact render={(props) => {
              return (
                <Loggedin />
              )
            }} />

            < Route path="/loggedin/allexpenses" exact render={() => {
              return (
                <Loggedin />
              )
            }} />

            <Route path="/cake" exact component={Cake}></Route>

          </div >
        </Router>

      </Provider>
    );
  }
}
export default App;
