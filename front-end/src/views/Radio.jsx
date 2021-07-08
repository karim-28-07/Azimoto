import React, { useState, useEffect } from 'react';
import { MDBFormInline, MDBInput } from 'mdbreact';


function Radio(props) {
    const [radio, setRadio] = useState([]);
    const [radioRep, setRadioRep] = useState([]);



    console.log("Radio reponse", radioRep)

    return (
        <MDBFormInline>
            <MDBInput
                onClick={() => setRadio(props.value)}
                checked={radio === props.value ? true : false}
                label={props.value}
                // model={props.model}
                type='radio'
                id={props.id}
                onChange={(e) => setRadioRep(e.target.value)}
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

