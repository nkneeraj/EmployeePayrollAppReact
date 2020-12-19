import React from 'react';
import './App.css';
import PayrollForm from './components/payroll-form/payroll-form'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home/home.jsx";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route path="/employee">
              <PayrollForm />
            </Route>
            <Route exact path ="/home">
              <Home />
            </Route>
            <Route exact path={["/employee","/payroll-form/:id"]}>
              <PayrollForm />
            </Route>
            <Route exact path="">
              <Redirect exact from="/" to="/home" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;