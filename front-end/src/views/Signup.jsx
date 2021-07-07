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
import axios from "axios";



// class Signup extends Component {

const Signup = () => {

  let history = useHistory()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [level, setLevel] = useState([]);
  const [parcour, setParcour] = useState([]);

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
    console.log("errors", errors)
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


  
  const program = async (body) => {
    try {
      const response = await axios.get("http://localhost:8080/program", body)

      const programMap = response.data.map((elem) => {
        return elem.name
      });

      setParcour(programMap)
      return programMap

    } catch (err) {
      console.log(err)
    }

  }
 


  const studies = async (body) => {
    try {
      const response = await axios.get("http://localhost:8080/levels", body)

      const lvlMap = response.data.map((elem) => {
        return elem.name
      });

      setLevel(lvlMap) 

      return lvlMap

    } catch (err) {
      console.log(err)
    }

  }



useEffect(() => {
  studies()
  program()

},[])



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
                  <p className="h4 text-center py-4">S'inscrire</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Ton prénom"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <MDBInput
                      label="Ton nom"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <MDBInput
                      label="Ton âge"
                      icon="calendar-alt"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) => setBirthday(e.target.value)}

                    />
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


                    <MDBIcon style={{ fontSize: "1.8rem" }} icon="user" className="mr-3" />
                    <label icon="user" htmlFor="exampleDisabled" className="disabled">Tu es un(e)</label>





                    <MDBFormInline className="my-5">

                      <MDBInput
                        onClick={() => setRadio('Une fille')}
                        checked={radio === 'Une fille' ? true : false}
                        label='Une fille'
                        type='radio'
                        id='radio1'
                        containerClass='offset-1 mr-5'
                        style={{
                          width: "20px",
                          height: "20px"
                        }}
                      />
                      <MDBInput
                        onClick={() => setRadio('Un garçon')}
                        checked={radio === 'Un garçon' ? true : false}
                        label='Un garçon'
                        type='radio'
                        id='radio1'
                        containerClass='mr-5'
                        style={{
                          width: "20px",
                          height: "20px"
                        }}
                      />
                      <MDBInput
                        onClick={() => setRadio('Autre')}
                        checked={radio === 'Autre' ? true : false}
                        label='Autre'
                        type='radio'
                        id='radio1'
                        containerClass='mr-5'
                        style={{
                          width: "20px",
                          height: "20px"
                        }}
                      />

                    </MDBFormInline>

                    <div className="my-5">
                      <select className="browser-default custom-select">
                        <option>Choisis ton niveau scolaire</option>
                        <option value="1">{level[0]}</option>
                        <option value="2">{level[1]}</option>
                        <option value="3">{level[2]}</option>
                        <option value="4">{level[3]}</option>
                        <option value="5">{level[4]}</option>
                        <option value="5">{level[5]}</option>
                        <option value="5">{level[6]}</option>
                      </select>

                    </div>

                    <div className="my-5">
                      <select className="browser-default custom-select">
                        <option>Choisis ton parcour</option>
                        <option value="1">{parcour[0]}</option>
                        <option value="2">{parcour[1]}</option>
                        <option value="3">{parcour[2]}</option>
                        <option value="4">{parcour[3]}</option>
                        <option value="5">{parcour[4]}</option>
                      </select>

                    </div>

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
                  </div>


                  <div className="text-center py-4 mt-3">
                    <MDBBtn onClick={signup} color="cyan" type="submit">

                      <Link to="/connexion" className="text-white nav-link active ">Enregistrer</Link>

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

export default Signup;