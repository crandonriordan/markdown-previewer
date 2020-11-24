import React from "react";

const parseText = (text) => {
    if(text) {
        const lines = text.split("\n");
        const output = lines.map((line) => {
            return parseLine(line);
        });

        console.log(output);
        return output;
    } else {
        return null;
    }
}

const parseLine = (line) => {
    if(line.startsWith("######")) {
        return (
            <h6>{line.substring(6)}</h6>
        )
    } else if (line.startsWith("#####")) {
        return (
            <h5>{line.substring(5)}</h5>
        )
    } else if (line.startsWith("####")) {
        return (
            <h4>{line.substring(4)}</h4>
        )
    } else if (line.startsWith("###")) {
        return (
            <h3>{line.substring(3)}</h3>
        )
    } else if (line.startsWith("##")) {
        return (
            <h2>{line.substring(2)}</h2>
        )
    } else if (line.startsWith("#")) {
        return (
            <h1>{line.substring(1)}</h1>
        )
    } else {
        return null;
    }
}

const Previewer = (props) => {
    return (
        <div className="flex-child">
            <h1 className="preview-header">Preview</h1>
            <hr/>
            { parseText(props.text) }
        </div>
    )
}

export default Previewer;