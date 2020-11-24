import React from "react";
import marked from "marked";
import sanitizeHtml from "sanitize-html";

const parseText = (text) => {
    if(text) {
        return sanitizeHtml(marked(text));
    } else {
        return null;
    }
}

const Previewer = (props) => {
    return (
        <div className="flex-child">
            <h1 className="preview-header">Preview</h1>
            <hr/>
            <div dangerouslySetInnerHTML={{__html: parseText(props.text)}} >
            </div>
        </div>
    )
}

export default Previewer;