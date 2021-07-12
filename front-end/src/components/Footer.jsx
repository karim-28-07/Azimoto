import React from "react";
import '../assets/styles/Footer.css';

import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBNavbarBrand } from "mdbreact";
import Plaquette from "../assets/PDF/Plaquette.pdf"
import Logo from "../assets/images/Logo.png"


const FooterPage = () => {
  return (

    <MDBFooter className="bg-info text-white font-small pt-4 ">

      <MDBContainer fluid className="container text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <MDBNavbarBrand className="loco-con">
              <img
                src={Logo}
                alt=""
                className="rounded-circle z-depth-2-half logo"
              />
            </MDBNavbarBrand>
            {/* <h5 className="title">Footer Content</h5> */}
            <p className="m-0">
              60 Rue Franklin
            </p>
            <p className="m-0 mb-3">
              93100 Montreuil
            </p>

            <a href="mailto:asso.azimuto@gmail.com" title="asso.azimuto@gmail.com">asso.azimuto@gmail.com</a>
            <br />
            <a href="tel:+33 6 36 50 48 05" title="+33 6 36 50 48 05">+33 6 36 50 48 05</a>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a href="/">ACCUEIL</a>
              </li>
              <li className="list-unstyled">
                <a href="/qui-sommes-nous">QUI SOMMES NOUS</a>
              </li>
              <li className="list-unstyled">
                <a href="/nos-programmes">NOS PROGRAMMES</a>
              </li>
              <li className="list-unstyled">
                <a href="/participer">PARTICIPER</a>
              </li>
              <li className="list-unstyled">
                <a href="/Contact">CONTACT</a>
              </li>
              <li className="list-unstyled">
                <a href="/connexion/loginadmin">Professionnels</a>
              </li>
              <a href={Plaquette} className="light-white-text" target="_blank">
                <h6 className="font-weight-bold">
                  Notre plaquette
                </h6>
              </a>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.Azimuto.com"> Azimuto.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;