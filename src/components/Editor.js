import React from "react";

const Editor = (props) => {
    return (
        <div className="flex-child">
            <h1>Editor</h1>
            <hr/>
            <textarea name="textarea"  
            value={props.text}></textarea>

        </div>
    )
}

export default Editor;