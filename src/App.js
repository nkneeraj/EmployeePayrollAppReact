import React from 'react';
import './App.css';
import PayrollForm from './components/payroll-form/payroll-form'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route path="/employee">
              <PayrollForm />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;