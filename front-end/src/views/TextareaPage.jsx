import React, { useState, useEffect } from 'react';

const TextareaPage = (props) => {
    const user = "60e46055cb0e2536f45ab107"

    return (
        <div className="form-group">
            <textarea
                className="form-control"
                id={props.id}
                rows="5"
                onChange={(e) => props.changeAnswerText({ valueText: e.target.value, question: props.id , user })}
                style={{ width: "80%" }}
            />
        </div>
    )
}

export default TextareaPage;