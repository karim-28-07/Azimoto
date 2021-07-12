import React from 'react'
import {
  BrowserRouter, Route,Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

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
import Modification from './views/Modification';
import Navbar from './components/Navbar';

// import './assets/styles/Home.css';


function App() {



  return (
    <BrowserRouter>



      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/qui-sommes-nous" exact component={Qui} />
        <Route path="/nos-programmes" exact component={Programmes} />
        <Route path="/participer" exact component={Participer} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/connexion" exact component={ConnexionPage} />
        <Route path="/professionnels" exact component={ConnexionAdminPage} />
        <Route path="/connexion/signup" exact component={Signup} />
        <Route path="/connexion/signup-admin" exact component={SignupAdmin} />
        <Route path="/connexion/login" exact component={Login} />
        <Route path="/logged/formulaire" exact component={QuestionPage} />
        <Route path="/modification" exact component={Modification} />
        {/* <Route path="/signup" component={} />
          <Route path="/login">
            <Login changeUserConnected={} />
          </Route>
          <Route path="/admin">
            <Admin disconnectUser={} />
          </Route> */}
      </Switch>

      <Navbar />
      <Footer />
    </BrowserRouter>

  );
}

export default App;

