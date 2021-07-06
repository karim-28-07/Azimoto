import React, { Component } from "react";
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


class Signup extends Component {
  state = {
    radio: 0
  };

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };

  render() {
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
                    />
                    <MDBInput
                      label="Ton nom"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Ton âge"
                      icon="calendar-alt"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />


                    <MDBIcon style={{ fontSize: "1.8rem" }} icon="user" className="mr-3" />
                    <label icon="user" htmlFor="exampleDisabled" className="disabled">Tu es un(e)</label>

                    <MDBFormInline className="my-5">

                      <MDBInput
                        onClick={this.onClick(1)}
                        checked={this.state.radio === 1 ? true : false}
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
                        onClick={this.onClick(2)}
                        checked={this.state.radio === 2 ? true : false}
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
                        onClick={this.onClick(3)}
                        checked={this.state.radio === 3 ? true : false}
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

                    <div>
                      <select className="browser-default custom-select">
                        <option>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>



                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                  </div>


                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">

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
};

export default Signup;