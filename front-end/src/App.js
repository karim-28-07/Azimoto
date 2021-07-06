import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'bootstrap-css-only/css/bootstrap.min.css'; 
import'mdbreact/dist/css/mdb.css';

import Home from './views/Home';
import Footer from './components/Footer';
import Qui from './views/Qui';
import Programmes from './views/Programmes';
import Participer from './views/Participer';
import ContactPage from './views/Contact';
import ConnexionPage from './views/Connexion';
import Signup from './views/Signup';
import Login from './views/Login';
import QuestionPage from './views/Formulaire';
import ConnexionAdminPage from './views/ConnexionAdmin';
import SignupAdmin from './views/SignupAdmin';

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
                  <Link to="/nos-programmes" className="nav-link active">Nos Programmes</Link>
                </li>
                <li className="nav-item">
                  <Link to="/participer" className="nav-link active">Participer</Link>
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
          <Route path="/qui" exact component={Qui} />
          <Route path="/nos-programmes" exact component={Programmes} />
          <Route path="/participer" exact component={Participer} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/connexion" exact component={ConnexionPage} />
          <Route path="/professionnels" exact component={ConnexionAdminPage} />
          <Route path="/connexion/signup" exact component={Signup} />
          <Route path="/connexion/signup-admin" exact component={SignupAdmin} />
          <Route path="/connexion/login" exact component={Login} />
          <Route path="/logged/formulaire" exact component={QuestionPage} />
          {/* <Route path="/signup" component={} />
          <Route path="/login">
            <Login changeUserConnected={} />
          </Route>
          <Route path="/admin">
            <Admin disconnectUser={} />
          </Route> */}
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;

