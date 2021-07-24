import './App.css';
import React from 'react';
import Loggedin from './dashboard/Loggedin';
import Bar from './components/navbar';
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/homepage";
/* import Navbar from './dashboard/nav';
import Dashtab from './dashboard/dashtab';
import Recentab from './dashboard/recenttab';
import Sidebar from './dashboard/sidebar'; */

import {
  // BrowserRouter as Router,
  Route,
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <div className="App" >

        {/* <Switch> */}

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

        < Route path="/loggedin" exact render={() => {
          return (
            <Loggedin />
          )
        }} />

        < Route path="/loggedin/dashboard" exact render={() => {
          return (
            <Loggedin />
          )
        }} />


        < Route path="/loggedin/recent" exact render={(props) => {
          return (
            <Loggedin data={props} />
          )
        }} />



        {/* </Switch> */}


        {/* <Link
  
                        key="dashboard"
                        to={{
                          pathname: `/dashboard`,
                        }}
  
                      >
                        {console.log("asuvfbjausbcvfOJIK", window.location.pathname)}
                        dashboard
                      </Link>
                      <Link
                        key="recent"
                        to={{
                          pathname: `/recent`,
                        }}
  
                      >
                        dashboard
                      </Link> */}

        {/* 
      <Router>
      <Route path="/" exact render={(props) => {
          return (
      <>
          <Nav />
      <div class="container-fluid" style={{ minHeight: "100%" }}>
                <div class="row" style={{ minHeight: "100%" }}>
                  <div class="col-2">
                    <Sidebar />
                  </div>
                  <div class="col-9 shadow border-4 border-start border-end" style={{ minHeight: "100%" }}>

                    <Route path="/dashboard" exact render={(props) => {
                      return (
                        <>
                          <Dashtab />
                        </>
                      )
                    }} />

                    <Route path="/recent" exact render={(props) => {
                      return (
                        <>
                          <Recentab />
                        </>
                      )
                    }} />

                  </div>
                </div>


              </div>
              </>
      </Router>
               */}



      </div >
    );
  }
}
export default App;
