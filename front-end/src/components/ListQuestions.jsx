import React from 'react'
import { MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBView, MDBMask, Link } from "mdbreact";

function ListQuestions(props) {
    return (

        <MDBView className="purple-slight text-center">


            <div className="container my-5 ">

                <MDBMask className='rgba-purple-slight ' />
                
                <section  style={{ marginTop: "15vmax" }}>
                    
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
                            
                            <MDBCardBody className="pb-0">
                                <MDBBtn color="cyan" rounded>
                                    <Link to="/modification" className="text-white nav-link active ">Modification Questions</Link>
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </section>
            </div>
        </MDBView>

    )
}

export default ListQuestions
