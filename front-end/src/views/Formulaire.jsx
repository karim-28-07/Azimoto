import React, { useState, useEffect } from 'react';
import { MDBFormInline } from 'mdbreact';
import axios from "axios";
import Radio from "./Radio"
import TextareaPage from "./TextareaPage"


const QuestionPage = () => {


    const [radioBox, setRadioBox] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [textBox, setTextBox] = useState([1]);

   


    const [questions, setQuestions] = useState([]);



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


    const Reponse = async (body) => {
        try {
            const response = await axios.post("http://localhost:8080/questions", body)

            // console.log("response.data",response.data)

            return response.data
        } catch (error) {
            console.error(error)
            return false
        }
    }

    useEffect(() => {
        Form()
        // Reponse()
    }, [])

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
                                    return <TextareaPage value={e} id={elem._id} model={elem.type} />
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

