import { Route, Link, Switch } from "react-router-dom";

import {
    MDBBtn, MDBCol, MDBRow,
} from 'mdbreact';

import ConnexionPage from "./Connexion";

const Home = () => {

    return (
        <div className="container">

            <MDBRow>
                <MDBCol md='12' className='mb-4 text-center'>
                    <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5'>
                        Discute avec Azimuto et découvre les métiers et les formations qui te correspondent
                    </h1>
                    <MDBBtn className="text-light" rounded color="cyan" >
                        <Link to="/professionnels" className="nav-link active text-white ">Professionnels : en savoir plus</Link>
                    </MDBBtn>
                    <MDBBtn className="text-light"  color="cyan" rounded>
                        <Link to="/connexion" className="nav-link active text-white ">Jeunes : accéder à mon espace Azimuto</Link>
                    </MDBBtn>

                </MDBCol>
            </MDBRow>


            <MDBRow>
                <MDBCol md='12' className='mb-4 text-center bg-light'>
                    <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                        Actualités
                    </h1>


                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='12' className='mb-4 text-center bg-light'>
                    <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                        Ressources
                    </h1>


                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='12' className='mb-4 text-center bg-light'>
                    <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                        Rapport d’activité
                    </h1>


                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='12' className='mb-4 text-center bg-light'>
                    <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                        Presse
                    </h1>


                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='12' className='mb-4 text-center bg-light'>
                    <h1 className='display-4 font-weight-bold mb-4 pt-md-5 pt-5 py-5'>
                        Ateliers
                    </h1>


                </MDBCol>
            </MDBRow>

            <Switch>

                <Route path="/connexion" exact component={ConnexionPage} />

            </Switch>
        </div>
    );
}

export default Home;
