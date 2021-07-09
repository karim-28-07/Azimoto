import React, { useState, useEffect } from 'react';
import { MDBFormInline, MDBInput } from 'mdbreact';


function Radio(props) {
    const [radio, setRadio] = useState([]);
    const [radioRep, setRadioRep] = useState([]);
    const user = "60e46055cb0e2536f45ab107"


    return (
        <MDBFormInline>
            <MDBInput
                onClick={() => setRadio(props.value)}
                checked={radio === props.value ? true : false}
                label={props.value}
                name={props.id}
                type='radio'
                id={props.id}
                // onChange={(e) => setRadioRep(e.target.value)}
                onChange={(e) => props.changeAnswerText({ valueNumber: props.value, question: props.id , user })}
                containerClass='mr-5'
                style={{
                    width: "100%",
                    height: "15px"
                }}
            />
        </MDBFormInline>
    )
}

export default Radio

