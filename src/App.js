import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
  <div><BrowserRouter>
    <Switch>
      <Route path={"/form"} component={Form}></Route>
    </Switch>
  </BrowserRouter>
  </div>
  )
}

export default App;
