import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask, Link } from "mdbreact";
import { useState, useEffect } from "react";
import axios from "axios"

const Modification = () => {

    const [questions, setQuestions] = useState([])
    const [editing, setEditing] = useState("")
    const [views, setViews] = useState(false)

    useEffect(async () => {

        try {

            const responseData = await axios.get("http://localhost:8080/questions")
            // console.log("Modification responseData", responseData.data.questionFound)

            if (responseData.data.questionFound) {
                setQuestions(responseData.data.questionFound)
            } else {
                alert("There was a problem")
            }

        } catch (error) {
            console.log(error)
        }
    }, [])

    // useEffect(async () => {
    //     console.log(1)
    //     try {
    //         const updateQuestion = await axios.patch("http://localhost:8080/questions/:id/questionupdate")
    //     } catch (error) {
    //         console.log(error)
    //     }
    // })





    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Espace Professionnel
            </h2>

            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="6" xl="5" className="mb-4">
                    <ul>

                        {questions.map((elem) => {
                            console.log(elem)
                            return (<div><li>{elem.description}</li><MDBBtn size="sm" color="cyan" >Editer</MDBBtn >
                                <MDBBtn size="sm" color="cyan" >Effacer</MDBBtn ></div>)
                        })}

                    </ul>

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

                        {/* <h4 className="font-weight-bold mb-3">Tu as déjà un compte ? Connecte-toi vite ici !</h4> */}

                        <MDBBtn color="cyan" rounded>

                            <Link to="/modification" className="text-white nav-link active ">Modification Questions</Link>

                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>

                {/* <MDBCol md="6" xl="5" className="mb-4">
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
              
              <MDBBtn color="cyan" rounded>
              <Link to="/modification" className="text-white nav-link active ">Modification</Link>

              </MDBBtn>
            </MDBCardBody>
          </MDBCol> */}
            </MDBRow>
        </section>
    );
}

export default Modification;