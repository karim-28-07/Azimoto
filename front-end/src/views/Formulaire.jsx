import React, { useState, useEffect } from 'react';
import { MDBFormInline, MDBInput } from 'mdbreact';
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


                return (
                    < >
                        <h5 className="col-12 my-5">
                            {elem.description}
                        </h5>

                        {radioBox.map((e) => {
                            if (elem.type === "multiple") {
                                return <Radio value={e} id={elem._id} model={elem.type} />
                            } 
                        })}
                        {textBox.map((e) => {
                            if (elem.type === "texte") {
                                return <TextareaPage value={e} id={elem._id} model={elem.type} />
                            } 
                        })}

                    </>
                );
            });
            setQuestions(questionsMap)

            return questionsMap

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        Form()

    }, [])

    return (
        <MDBFormInline className="my-5">
            {questions}

            <div>
                {radioBox.map((e) => {
                    return <Radio elem={e} />
                })}
            </div>

            {/* <h5 className="col-12">
            </h5>

            <MDBInput
                onClick={() => setRadio(1)}
                checked={radio === 1 ? true : false}
                label='1'
                type='radio'
                id='radio1'
                containerClass='mr-5'
                style={{
                    width: "100%",
                    height: "15px"
                }}
            />
           
            <MDBInput
                onClick={() => setRadio(10)}
                checked={radio === 10 ? true : false}
                label='10'
                type='radio'
                id='radio3'
                containerClass='mr-5'
                style={{
                    width: "65%",
                    height: "15px"
                }}
            /> */}

        </MDBFormInline>

    );

}

export default QuestionPage;

