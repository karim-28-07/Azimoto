import React, { useState, useEffect } from "react";
import {
  MDBIcon,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  Link,
  MDBFormInline,
} from 'mdbreact';

import { useHistory } from 'react-router-dom'
import { postSignup } from '../utils/network';



// class Signup extends Component {

const SignupAdmin = () => {

  let history = useHistory()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const [formErrors, setFormErrors] = useState([]);

  const [userCreated, setUserCreated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token") || false

    if (token) {
      history.push("/admin")
    }
  }, [])

  const validateForm = () => {
    const errors = []
    console.log("errors",errors)
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(email.toLowerCase())) {
      errors.push("Email is not valid")

    }

    if (password !== confirmPassword) {
      errors.push("Passwords are not the same")
    }

    // const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/
    // if (!regexPassword.test(password)) {
    //   errors.push("Passwords must have at least 4 characters, 1 number, 1 upper and 1 lowercase")
    // }

    // if (!(age < "13" || age > "25")) {
    //   errors.push("Please enter your Age")
    // }

    if (firstName === "") {
      errors.push("Please enter First Name")
    }

    if (lastName === "") {
      errors.push("Please enter Last Name")
    }

    // if (sex === "") {
    //   errors.push("Please enter your Sex")
    // }

    return errors
  }
  

  const [radio, setRadio] = useState("");

  // state = {
  //   radio: 0
  // };

  // onClick = nr => () => {
  //   this.setState({
  //     radio: nr
  //   });
  // };



  console.log("firstName:", firstName)
  console.log("lastName:", lastName)
  console.log("age:",birthday)
  console.log("email:" ,email)
  console.log("password:", password)
  console.log("confirmPassword:", confirmPassword)
  console.log("Sex:", radio)




  const signup = async () => {
    try {
      const validationErrors = validateForm()

      if (validationErrors.length === 0) {
        const result = await postSignup({
          firstName,
          lastName,
          birthday,
          email,
          sex,
          password,
          confirmPassword,
        })
        
        if (result) {
          setUserCreated(true)
        } else {
          alert("There was a problem")
        }
      } else {
        setFormErrors(validationErrors)
      }
    } catch (error) {
      alert("There was a problem")
    }
  }

  if (userCreated) {
    return ("User created!")
  } else {

    return (

      <MDBContainer>
        <MDBRow >
          <MDBCol className="row my-5">
            <MDBCard className="offset-3 col-6">
              <MDBCardBody>
                <form>
                  
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) => setEmail(e.target.value)}
                    />


                  

                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="exclamation-triangle"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  


                  <div className="text-center py-4 mt-3">
                    <MDBBtn onClick={signup} color="cyan" type="submit">

                      <Link to="/logged/formulaire" className="text-white nav-link active ">Enregistrer</Link>

                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>


      </MDBContainer>
    );
  }
}

export default SignupAdmin;