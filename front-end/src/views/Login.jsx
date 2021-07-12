import React, { useState, useEffect } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  Link,
  MDBFormInline,
  MDBIcon
} from 'mdbreact';
import { useHistory } from "react-router-dom";
import axios from 'axios'


const Login = (props) => {
  let history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validLogin = async () => {
    try {
      console.log("je suis validLogin", validLogin)
      const response = await axios.post("http://localhost:8080/user/login", { email: email, password: password })
      console.log("Login User response", response)

      if (response.data.error) {

        alert("Email or password incorrect")

      } else {
        const token = response.data.token
        // const email = response.data.validUser.email

        console.log("token", token)
        // console.log("email :", email)

        localStorage.setItem("token", `${token}`)

        props.connectUser()

        console.log("localStorage :", localStorage.getItem("token"));

        history.push("/logged/formulaire")
      }
    } catch (error) {
      // alert("Email or password incorrect")
      console.error("error :", error)
    }
  }
  return (
    <MDBFormInline className=" purple-slight">
      <div className="container my-5 ">
        <section className="mb-5" style={{ marginTop: "12vmax" }}>
          <MDBContainer>
            <MDBRow >
              <MDBCol className="row my-5">
                <MDBCard className="offset-3 col-6">
                  <MDBCardBody>
                    <>
                      <p className="h4 text-center py-4">Login</p>
                      <div className="grey-text">

                        <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <MDBInput label="Your password" icon="lock" group type="password" validate
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="text-center py-4 mt-3">
                      

                        <MDBBtn outline color='purple' className="mb-5 btn-rounded " >
                          <MDBIcon icon='user' className='mr-2 ' />
                          <Link to="/logged/formulaire" className=" nav-link active b-Right ">Se connecter </Link>
                        </MDBBtn>
                      
                      </div>
                    </>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </MDBFormInline>
  );
};

export default Login;