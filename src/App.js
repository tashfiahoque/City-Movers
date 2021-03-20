import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import NoFound from './Components/NoFound/NoFound';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';



export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination />
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blog />
          </PrivateRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
