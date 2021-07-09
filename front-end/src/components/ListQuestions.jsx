import React from 'react'
import { MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask, Link, } from "mdbreact";

function ListQuestions(props) {
    return (
        <section className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Espace Professionnel
            </h2>
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="6" xl="5" className="mb-4">
                    <ul>
                        {props.questions.map((elem) => {
                            return (
                                <>
                                    <div><li>{elem.description}</li>
                                        <MDBBtn size="sm" color="cyan" onClick={(e) => { props.setEditingId(elem._id); props.setViews("Edit") }}>Editer</MDBBtn >
                                        <MDBBtn size="sm" color="cyan" onClick={(e) => { props.setDeletId(elem._id); props.setViews("Delete") }}>Effacer</MDBBtn >
                                    </div>
                                </>
                            )
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
                        <MDBBtn color="cyan" rounded>
                            <Link to="/modification" className="text-white nav-link active ">Modification Questions</Link>
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </section>
    )
}

export default ListQuestions
