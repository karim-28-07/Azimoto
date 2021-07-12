import React from "react";
import { MDBContainer,MDBView, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBMask } from 'mdbreact';
import { useState, useEffect } from "react";
import axios from "axios"
import EditQuestion from "../components/EditQuestion";
import ListQuestions from "../components/ListQuestions";

const Modification = () => {
    const [questions, setQuestions] = useState([])
    const [editingId, setEditingId] = useState("")
    const [views, setViews] = useState("List")
    const [deletId, setDeletId] = useState("")

    useEffect(async () => {
        try {
            const responseData = await axios.get("http://localhost:8080/questions")

            if (responseData.data.questionFound) {
                setQuestions(responseData.data.questionFound)
            } else {
                alert("There was a problem")
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    const deleteQuestion = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/questions/${deletId}`)
            const responseData = await axios.get("http://localhost:8080/questions")
            setQuestions(responseData.data.questionFound)
            setViews("List")
        } catch (error) {
            console.log(error)
        }
    }
    console.log("deletId", deletId)
    if (views === "List") {
        return <ListQuestions setEditingId={setEditingId} questions={questions} setViews={setViews} setDeletId={setDeletId} setViews={setViews} />
    } else if (views === "Edit") {
        return <EditQuestion editingId={editingId} setEditingId={setEditingId} setQuestions={setQuestions} setViews={setViews} />
    } else if (views === "Delete") {
        return (
            <MDBView className="purple-slight ">

                <div className="container my-5 ">

                    <section className="mb-5" style={{ marginTop: "15vmax" }}>
                        <div>
                            <h2>Es que vous êtes sur de suprimmer la question ?</h2>
                            <MDBBtn color="cyan" rounded onClick={deleteQuestion}>Confirmer</MDBBtn>
                        </div>
                    </section>

                </div>
            </MDBView>
        )
    }
}

export default Modification;