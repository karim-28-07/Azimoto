import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask, Link, MDBIcon } from "mdbreact";

const ConnexionPage = () => {
  return (
    <MDBView className="purple-slight text-center">
      <div className="container my-5" >

        <section className="mb-5" style={{ marginTop: "15vmax" }}>

          <MDBMask />

          <h2 className="h1-responsive font-weight-bold my-5">
            Espace Jeune
          </h2>

          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">

                <h4 className="font-weight-bold mb-3">Tu as déjà un compte ? Connecte-toi vite ici !</h4>

                <MDBBtn outline color='purple' className="mb-5 btn-rounded " >
                  <MDBIcon icon='user' className='mr-2 ' />
                  <Link to="/connexion/login" className=" nav-link active b-Right ">Me Connecter </Link>
                </MDBBtn>

              </MDBCardBody>
            </MDBCol>

            <MDBCol md="6" xl="5" className="mb-4">
              <MDBView className="overlay rounded z-depth-2" waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">

                <h4 className="font-weight-bold mb-3">C'est la première fois que tu viens ? Clique ici</h4>

                <MDBBtn outline color='purple' className="mb-5 btn-rounded " >
                  <MDBIcon icon='user' className='mr-2 ' />
                  <Link to="/connexion/signup" className=" nav-link active b-Right ">Créer mon compte </Link>
                </MDBBtn>

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </section>
      </div>
    </MDBView>

  );
}

export default ConnexionPage;