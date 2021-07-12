import React from 'react'
import { MDBContainer, MDBView, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { useState, useEffect } from 'react'
import axios from 'axios'

function EditQuestion(props) {
    const [description, setDescription] = useState("")
    const modifQuestion = async () => {
        try {
            const response = await axios.patch(`http://localhost:8080/questions/${props.editingId}/questionupdate`, { description: description })
            console.log(response)
            props.setEditingId("")

            const responseData = await axios.get("http://localhost:8080/questions")
            props.setQuestions(responseData.data.questionFound)
            props.setViews("List")

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <MDBView className="purple-slight ">

            <div className="container my-5 ">

                <section className="mb-5" style={{ marginTop: "15vmax" }}>
                    <div>
                        <input type="text" id="example1" className="form-control form-control-lg" onChange={(e) => setDescription(e.target.value)} />
                        <MDBBtn color="cyan" rounded onClick={modifQuestion}>Confirmer</MDBBtn>
                    </div>
                </section>

            </div>
        </MDBView>
    )
}

export default EditQuestion
