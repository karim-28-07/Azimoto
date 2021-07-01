import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home';

function App() {


  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Azimuto</Link>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">Accueil</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Qui" className="nav-link active">Qui</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Nos-Programmes" className="nav-link active">Nos Programmes</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link active">Contact</Link>
                </li>

              </ul>
              

            </div>
          </div>
        </nav>



        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/signup" component={} />
          <Route path="/login">
            <Login changeUserConnected={} />
          </Route>
          <Route path="/admin">
            <Admin disconnectUser={} />
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

