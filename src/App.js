import React from 'react'
import './App.css'
import Game from './components/Game'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const App = () => 
<>
      <Router>
      <Navigation/>
        <div>
          <Switch>
            <Route exact path="/"/>
          </Switch>
        </div>
      </Router>

<Game/>
</>


export default App;
