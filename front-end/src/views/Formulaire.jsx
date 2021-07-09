import React, { useState, useEffect } from 'react';
import { MDBFormInline } from 'mdbreact';
import axios from "axios";
import Radio from "./Radio";
import TextareaPage from "./TextareaPage";


const QuestionPage = () => {

    const [radioBox, setRadioBox] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [textBox, setTextBox] = useState([1]);

    const [questions, setQuestions] = useState([]);

    const [response, setResponses] = useState([]);



    const changeCollection = (response, id) => {
        const newFilterResponses = response.filter((elem) => {

            return elem.questionId !== response
        })
        const newResponses = [...newFilterResponses, { response, id }]

        console.log(newResponses)
        setResponses(
            newResponses
        )
    }

    // console.log("changeCollection",changeCollection)

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
    
    useEffect(() => {
        Form()
    }, [])
    // console.log("reponse",reponse)
    return (
        <MDBFormInline className="my-5">

            <form>
                {questions.map((elem) => {
                    return (
                        <>
                            <h3>{elem.description}</h3>
                            {radioBox.map((e) => {
                                if (elem.type === "multiple") {
                                    return <Radio

                                        value={e}
                                        id={elem._id}
                                    />
                                }

                            })}
                            {textBox.map((e) => {
                                if (elem.type === "texte") {
                                    return <TextareaPage value={e} id={elem._id} text={changeCollection} />
                                }
                            })}
                        </>
                    );
                })}

            </form>

        </MDBFormInline>

    );

}

export default QuestionPage;

