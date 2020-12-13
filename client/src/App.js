import './App.css';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Main from './views/Main';
import Update from './views/Update'
import Add from './views/Add'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="author/"/>
        <Update path="author/:id/edit"/>
        <Add path="author/new" />
      </Router>
    </div>
  );
}
export default App;
