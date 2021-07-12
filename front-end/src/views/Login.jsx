import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,Link } from 'mdbreact';



const Login = () => {



  
  return (
    <MDBContainer>
      <MDBRow >
        <MDBCol className="row my-5">
          <MDBCard className="offset-3 col-6">
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Login</p>
                <div className="grey-text">
                
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn  color="cyan" type="submit">
                  <Link to="/logged/formulaire" className="nav-link active text-white ">Login</Link>
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;