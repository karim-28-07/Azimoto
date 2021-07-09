import React, { useState, useEffect } from 'react';

const TextareaPage = (props) => {
    const [Textarea, setTextarea] = useState({});
    
  
    console.log("TextareaPage",Textarea);

    // console.log("props.text",props.text);

    return (
        <div className="form-group">
            <textarea
            className="form-control"
           id={props.id}
            rows="5"
            onChange={(e) => setTextarea({response:e.target.value, id:props.id})}
            style={{width: "80%"}}
            />
        </div>
    )
}

export default TextareaPage;