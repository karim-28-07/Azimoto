import React, { useState, useEffect } from 'react';
import { MDBFormInline, MDBBtn } from 'mdbreact';
import axios from "axios";
import Radio from "./Radio";
import TextareaPage from "./TextareaPage";


const QuestionPage = () => {

    const [radioBox, setRadioBox] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [textBox, setTextBox] = useState([1]);

    const [questions, setQuestions] = useState([]);

    const [response, setResponses] = useState([]);


    const changeCollection = (data) => {
        const newFilterResponses = response.filter((elem) => {

            return elem.id !== data.id
        })
        const newResponses = [...newFilterResponses, data]

        setResponses(
            newResponses
        )
    }
    console.log("response", response)

    const Form = async (body) => {
        try {
            const response = await axios.get("http://localhost:8080/questions", body)

            const questionsMap = response.data.questionFound.map((elem) => {
                return elem
            });

            setQuestions(questionsMap)

        } catch (err) {
            console.log(err)
        }
    }


    const userReponse = async (body) => {
        try {
            await axios.post("http://localhost:8080/answers", response)


        } catch (err) {
            console.log(err)
        }
    }



    useEffect(() => {
        Form()
    }, [])
    return (
        <MDBFormInline className="my-5">

            <form>
                {questions.map((elem, index) => {
                    return (
                        <>
                            {index === 19 && <h2>NE PAS RÉPONDRE À CES QUESTIONS AVANT D'AVOIR FINI LE PARCOURS AVEC AZIMUTO</h2> } 
                            <h3>{elem.description}</h3>
                            {radioBox.map((e) => {
                                if (elem.type === "multiple") {
                                    return <Radio
                                        changeAnswerText={changeCollection}
                                        value={e}
                                        id={elem._id}
                                    />
                                }

                            })}
                            {textBox.map((e) => {
                                if (elem.type === "texte") {
                                    return <TextareaPage value={e} id={elem._id} changeAnswerText={changeCollection} />
                                }
                            })}
                        </>
                    );
                })}

            </form>

            <MDBBtn onClick={userReponse} color="cyan">

                Enregistrer

            </MDBBtn>

        </MDBFormInline>

    );

}

export default QuestionPage;

