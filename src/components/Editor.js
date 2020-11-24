import React from "react";

const Editor = (props) => {
    return (
        <div className="flex-child editor-container">
            <h1>Editor</h1>
            <hr/>
            <textarea onChange={props.onChange} name="textarea"  
            value={props.text}></textarea>

        </div>
    )
}

export default Editor;